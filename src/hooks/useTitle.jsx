import { useCallback } from "react";

export const usePageTitle = () => {
    const rename = useCallback((value) => {
        document.title = value;
    }, []);

    return {
        rename,
    };
};