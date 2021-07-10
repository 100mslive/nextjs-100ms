import {useHMSActions, useHMSStore, selectIsConnectedToRoom} from "@100mslive/hms-video-react";
import Preview from "./preview";
import Room from "./room";
import getToken from "../services/getToken";

const Conference = () => {
    const hmsActions = useHMSActions();
    const isConnected = useHMSStore(selectIsConnectedToRoom);
      const handleSubmit = async (userName) => {
        const token = await getToken(userName);
        hmsActions.join({ authToken: token, userName });
      };
        return (
            <>{isConnected ? <Room /> : <Preview handleSubmit={handleSubmit} />}</>
    )
}

export default Conference;