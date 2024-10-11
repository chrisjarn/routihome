import React, { useRef, useState, useEffect } from "react";
import { Pause, Play } from "lucide-react";

interface CustomVideoPlayerProps {
  videoUrl: string;
  poster?: string;
}

const CustomVideoPlayer: React.FC<CustomVideoPlayerProps> = ({
  videoUrl,
  poster,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [showControls, setShowControls] = useState<boolean>(false); // State to track hover

  // Toggle play/pause based on the current state
  const togglePlayPause = () => {
    if (isPlaying) {
      handlePause();
    } else {
      handlePlay();
    }
  };

  // Play the video and update state
  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  // Pause the video and update state
  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Reset video when it ends
  const handleVideoEnd = () => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0; // Reset video to start
    }
  };

  // Listen to play, pause, and ended events to sync state
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onEnded = () => handleVideoEnd();

    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    video.addEventListener("ended", onEnded);

    // Cleanup event listeners on unmount
    return () => {
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
      video.removeEventListener("ended", onEnded);
    };
  }, []);

  return (
    <div
      className="relative w-full h-full rounded-xl overflow-hidden"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
      onClick={togglePlayPause} // Toggle play/pause on video container click
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover cursor-pointer" // Add pointer cursor to indicate interactivity
        poster={poster}
        playsInline // Prevent fullscreen mode on iOS
        controls={false}
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Play Button Overlay (visible on all devices when video is not playing) */}
      {!isPlaying && (
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevent the container click handler from triggering
            handlePlay();
          }}
          className="
            absolute 
            top-1/2 left-1/2 
            transform -translate-x-1/2 -translate-y-1/2 
            bg-[rgba(68,68,68,0.55)] 
            backdrop-saturate-[180%] backdrop-blur-[10px] 
            text-primary
            p-6 rounded-full 
            hover:bg-[rgba(68,68,68,0.65)] 
            transition 
            focus:outline-none 
          "
          aria-label="Play Video"
        >
          <Play className="h-8 w-8" />
        </button>
      )}

      {/* Pause Button Overlay (only shown on larger screens when playing and on hover) */}
      {isPlaying && showControls && (
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevent the container click handler from triggering
            handlePause();
          }}
          className="
            hidden md:flex  // Hide on mobile, visible on medium screens and above
            absolute 
            top-1/2 left-1/2 
            transform -translate-x-1/2 -translate-y-1/2 
            bg-[rgba(68,68,68,0.55)] 
            backdrop-saturate-[180%] backdrop-blur-[10px] 
            text-primary 
            p-6 rounded-full 
            hover:bg-[rgba(68,68,68,0.65)] 
            transition 
            focus:outline-none 
          "
          aria-label="Pause Video"
        >
          <Pause className="h-8 w-8" />
        </button>
      )}
    </div>
  );
};

export default CustomVideoPlayer;
