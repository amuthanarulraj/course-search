import { ReactElement, useRef } from "react";

type Props = {
    onSearch: (query: string) => void
}

export default (props: Props): ReactElement => {
    const inputRef = useRef<HTMLInputElement>(null);
    const search = () => {
        const query = inputRef.current?.value;
        props.onSearch(query as string);
    }
    return (
        <div>
            <input ref={inputRef} type="text"></input>
            <button type="submit" onClick={search}>Search</button>
        </div>
    );
}