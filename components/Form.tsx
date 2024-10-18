import type { ComponentChildren } from "preact";

interface Props {
    result: ComponentChildren;
    children: ComponentChildren;
}

export default function Form(props: Props) {
    return (
        <>
            <div class="grid gap-4">
                {props.children}
            </div>
            {props.result}
        </>
    );
}
