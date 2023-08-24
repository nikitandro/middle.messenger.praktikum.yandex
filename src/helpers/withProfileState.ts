import connectComponentToStore from '../utils/store/connectComponent';

export default connectComponentToStore((state) => ({ profile: state.user }));
