import Block from '../../components/block';
import isEqual from '../isEqual';
import { StoreEvents } from './events';
import store from './store';

export default function connectComponentToStore(
    mapStateToProps: <T extends Record<string, any>>(state: Record<string, any>) => T,
) {
    return function (Component: typeof Block) {
        return class extends Component {
            constructor([tagName, inputParams]: ConstructorParameters<typeof Block>) {
                let state = mapStateToProps(store.getState());

                super(tagName, { ...inputParams, props: { ...inputParams?.props, ...state } });

                store.on(StoreEvents.Updated, () => {
                    const newState = mapStateToProps(store.getState());

                    if (!isEqual(state, newState)) {
                        this.setProps({ ...newState });

                        state = newState;
                    }
                });
            }
        };
    };
}
