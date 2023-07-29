import Block from '../components/block/block';

export default function render(query: string, component: Block<any>) {
    const root = document.querySelector(query);

    if (root) {
        root.appendChild(component.getContent());
    }

    component.dispatchComponentDidMount();

    return root;
}
