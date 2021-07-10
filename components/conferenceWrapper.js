import { HMSRoomProvider } from "@100mslive/hms-video-react";
import  Conference  from "./conference";

const ConferenceWrapper = () => {
        return (
        <HMSRoomProvider>
            <Conference/>
        </HMSRoomProvider>
    )
}

export default ConferenceWrapper;