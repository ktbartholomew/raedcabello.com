import React from 'react';

const Instagram = () => {
  return (
    <svg
      className="icon-instagram"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* linear-gradient(43.94deg, #EEA054 16.16%, #D64763 50.11%, #B62A99 83.68%); */}
      <linearGradient id="instagram-gradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="16%" stopColor="#eea054" />
        <stop offset="50%" stopColor="#d64763" />
        <stop offset="84%" stopColor="#b62a99" />
      </linearGradient>
      <path
        className="background"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0ZM15.6027 9.39779C16.7405 9.34601 17.1041 9.33334 20.001 9.33334H19.9977C22.8955 9.33334 23.2577 9.34601 24.3955 9.39779C25.5311 9.44979 26.3066 9.62957 26.9866 9.89335C27.6889 10.1656 28.2822 10.53 28.8755 11.1234C29.4689 11.7163 29.8333 12.3114 30.1067 13.0129C30.3689 13.6912 30.5489 14.4663 30.6022 15.6019C30.6533 16.7396 30.6667 17.1032 30.6667 20.0001C30.6667 22.897 30.6533 23.2597 30.6022 24.3975C30.5489 25.5326 30.3689 26.308 30.1067 26.9864C29.8333 27.6878 29.4689 28.2829 28.8755 28.8758C28.2829 29.4691 27.6886 29.8344 26.9873 30.1069C26.3086 30.3707 25.5326 30.5505 24.397 30.6025C23.2593 30.6542 22.8968 30.6669 19.9997 30.6669C17.103 30.6669 16.7396 30.6542 15.6018 30.6025C14.4665 30.5505 13.6912 30.3707 13.0125 30.1069C12.3114 29.8344 11.7162 29.4691 11.1236 28.8758C10.5305 28.2829 10.166 27.6878 9.89334 26.9862C9.62978 26.308 9.45 25.5328 9.39778 24.3973C9.34622 23.2595 9.33333 22.897 9.33333 20.0001C9.33333 17.1032 9.34666 16.7394 9.39755 15.6016C9.44867 14.4665 9.62867 13.6912 9.89312 13.0127C10.1665 12.3114 10.5309 11.7163 11.1242 11.1234C11.7171 10.5302 12.3123 10.1658 13.0138 9.89335C13.692 9.62957 14.4672 9.44979 15.6027 9.39779Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.0441 11.2556C19.2299 11.2553 19.4298 11.2554 19.6455 11.2555L20.001 11.2556C22.849 11.2556 23.1866 11.2658 24.3113 11.3169C25.3513 11.3645 25.9157 11.5383 26.2917 11.6843C26.7895 11.8776 27.1444 12.1087 27.5175 12.4821C27.8909 12.8554 28.122 13.211 28.3158 13.7087C28.4618 14.0843 28.6358 14.6487 28.6831 15.6888C28.7342 16.8132 28.7453 17.151 28.7453 19.9977C28.7453 22.8444 28.7342 23.1822 28.6831 24.3066C28.6355 25.3466 28.4618 25.9111 28.3158 26.2866C28.1224 26.7844 27.8909 27.1389 27.5175 27.512C27.1442 27.8853 26.7897 28.1164 26.2917 28.3098C25.9162 28.4564 25.3513 28.6298 24.3113 28.6773C23.1868 28.7284 22.849 28.7396 20.001 28.7396C17.1528 28.7396 16.8152 28.7284 15.6907 28.6773C14.6507 28.6293 14.0863 28.4556 13.7101 28.3096C13.2123 28.1162 12.8567 27.8851 12.4834 27.5118C12.11 27.1384 11.8789 26.7838 11.6851 26.2858C11.5391 25.9102 11.3651 25.3457 11.3178 24.3057C11.2667 23.1813 11.2565 22.8435 11.2565 19.995C11.2565 17.1465 11.2667 16.8105 11.3178 15.6861C11.3654 14.6461 11.5391 14.0816 11.6851 13.7056C11.8785 13.2078 12.11 12.8523 12.4834 12.4789C12.8567 12.1056 13.2123 11.8745 13.7101 11.6807C14.0861 11.534 14.6507 11.3607 15.6907 11.3129C16.6747 11.2685 17.0561 11.2552 19.0441 11.2529V11.2556ZM25.6948 13.0267C24.9882 13.0267 24.4148 13.5994 24.4148 14.3063C24.4148 15.013 24.9882 15.5863 25.6948 15.5863C26.4015 15.5863 26.9749 15.013 26.9749 14.3063C26.9749 13.5996 26.4015 13.0263 25.6948 13.0263V13.0267ZM14.5232 20.0001C14.5232 16.9751 16.9757 14.5224 20.0008 14.5223C23.0259 14.5223 25.4779 16.975 25.4779 20.0001C25.4779 23.0253 23.0261 25.4769 20.001 25.4769C16.9759 25.4769 14.5232 23.0253 14.5232 20.0001Z"
        fill="black"
      />
      <path
        d="M20.001 16.4446C21.9646 16.4446 23.5566 18.0364 23.5566 20.0002C23.5566 21.9637 21.9646 23.5558 20.001 23.5558C18.0372 23.5558 16.4454 21.9637 16.4454 20.0002C16.4454 18.0364 18.0372 16.4446 20.001 16.4446Z"
        fill="black"
      />
    </svg>
  );
};

export default Instagram;
