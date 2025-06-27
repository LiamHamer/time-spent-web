import { useFeatureFlag } from "configcat-react";

export function FeatureFlagsList() {
    const { value: isAuthEnabled } = useFeatureFlag("authenabled", false);

    return (
        <>
            <p>is auth enabled: {isAuthEnabled ? "yes" : "no"}</p>
        </>
    )

}