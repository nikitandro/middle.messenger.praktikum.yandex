import connectComponentToStore from '../utils/store/ConnectComponent';

export default connectComponentToStore((state) => ({ profile: state.user }));
