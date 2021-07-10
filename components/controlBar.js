import {
  useHMSActions,
  useHMSStore,
  selectIsLocalAudioEnabled,
  selectIsLocalVideoEnabled
} from "@100mslive/hms-video-react";

const ControlBar = () => {
  const hmsActions = useHMSActions();
  const isLocalAudioEnabled = useHMSStore(selectIsLocalAudioEnabled);
  const isLocalVideoEnabled = useHMSStore(selectIsLocalVideoEnabled);
  const toggleAudio = async () => {
    await hmsActions.setLocalAudioEnabled(!isLocalAudioEnabled);
  };
  const toggleVideo = async () => {
    await hmsActions.setLocalVideoEnabled(!isLocalVideoEnabled);
  };

  return (
    <div className="fixed bottom-0 h-10 bg-gray-400 w-screen flex items-center justify-center">
      <button
        className="text-xs uppercase tracking-wider bg-white py-1 px-2 rounded-lg shadow-lg text-indigo-500 mr-2"
        onClick={toggleAudio}
      >
        {isLocalAudioEnabled ? "Mute" : "Unmute"}
      </button>
      <button
        className="text-xs uppercase tracking-wider bg-white py-1 px-2 rounded-lg shadow-lg text-indigo-500"
        onClick={toggleVideo}
      >
        {isLocalVideoEnabled ? "Hide" : "Unhide"}
      </button>
    </div>
  );
};

export default ControlBar;
