import Block from '../../components/block';
import isEqual from '../isEqual';
import { StoreEvents } from './events';
import Store from './store';

export default function connectComponentToStore(
    mapStateToProps: (state: Record<string, any>) => Record<string, any>,
) {
    const store = new Store();
    return function (Component: typeof Block) {
        return class extends Component {
            constructor(props: any) {
                let state = mapStateToProps(store.getState());

                super({ ...props, ...state });

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
