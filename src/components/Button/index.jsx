import classNames from "classnames";

export function Button({ className, ...rest }) {
    return <button {...rest} className={classNames("pure-button pure-button-primary", className)} />;
}