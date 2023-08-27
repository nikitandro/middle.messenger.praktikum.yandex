import Block from '../../components/block';
import cloneDeep from '../cloneDeep';
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
                let state = cloneDeep(mapStateToProps(store.getState()));

                super({ ...props, ...state });

                store.on(StoreEvents.Updated, () => {
                    const newState = mapStateToProps(store.getState());

                    if (!isEqual(state, newState)) {
                        this.setProps({
                            props: {
                                ...newState,
                            },
                        });
                        state = cloneDeep(newState);
                    }
                });
            }
        };
    };
}
