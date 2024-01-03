import React from "react";
import Backdrop from "./Backdrop";
import { motion } from "framer-motion";
import Link from "next/link";

export default function BookmarkModal({ closeModal }: any) {
  const dropIn = {
    hidden: {
      y: "100%",
      opacity: 1,
    },
    visible: {
      y: 0,
      transition: {
        duration: 0.3,
      },
      opacity: 1,
    },
    exit: {
      y: "100%",
      opacity: 1,
    },
  };
  return (
    <Backdrop onClick={closeModal}>
      <motion.div onClick={(e) => e.stopPropagation()} className="rounded-t-3xl p-6 bg-white w-full max-w-[420px] fixed bottom-0 space-y-6" initial="hidden" animate="visible" exit="exit" variants={dropIn}>
        <div className="flex flex-col items-center gap-y-4">
          <p className=" font-semibold text-[#101828]">Simpan restoran favorit kamu!</p>
          <svg width="183" height="152" viewBox="0 0 183 152" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M174.287 90.1656C176.683 85.6161 178.056 80.4439 178.056 74.9444C178.056 60.9668 169.276 49.0686 156.942 44.3798C156.942 44.365 156.945 44.3502 156.945 44.3333C156.945 19.8487 137.096 0 112.611 0C91.9561 0 74.6513 14.1466 69.7282 33.2648C66.6122 32.2409 63.2914 31.6667 59.8334 31.6667C43.5947 31.6667 30.2293 43.8963 28.399 59.6431C17.4127 61.9674 9.16675 71.7123 9.16675 83.3889C9.16675 96.7966 20.0369 107.667 33.4445 107.667C33.8182 107.667 34.1876 107.641 34.555 107.62C34.5465 107.99 34.5001 108.351 34.5001 108.722C34.5001 132.624 53.8759 152 77.7779 152C91.3671 152 103.481 145.726 111.416 135.926C116.014 140.623 122.407 143.556 129.5 143.556C139.317 143.556 147.812 137.961 152.017 129.795C154.238 130.503 156.6 130.889 159.056 130.889C171.881 130.889 182.278 120.492 182.278 107.667C182.278 100.677 179.175 94.4237 174.287 90.1656Z"
              fill="#FDEAEA"
            />
            <path
              d="M151.667 98.1667V99.2223H158V98.1667C158 98.1667 166.955 98.1667 169.611 98.1667C174.857 98.1667 179.111 93.9128 179.111 88.6667C179.111 83.7415 175.349 79.7388 170.551 79.2617C170.597 78.8796 170.667 78.5059 170.667 78.1112C170.667 72.8651 166.413 68.6112 161.167 68.6112C158.131 68.6112 155.46 70.0594 153.721 72.2761C153.425 66.7112 148.861 62.2778 143.222 62.2778C137.394 62.2778 132.667 67.0046 132.667 72.8334C132.667 73.7749 132.829 74.6701 133.062 75.5398C131.706 73.8995 129.682 72.8334 127.389 72.8334C123.629 72.8334 120.562 75.6517 120.095 79.2828C119.713 79.2364 119.339 79.1667 118.945 79.1667C113.698 79.1667 109.445 83.4206 109.445 88.6667C109.445 93.9128 113.698 98.1667 118.945 98.1667C124.191 98.1667 139 98.1667 139 98.1667H151.667Z"
              fill="#F7BFBF"
            />
            <path
              d="M143.222 61.2224C136.819 61.2224 131.611 66.4305 131.611 72.8335C131.611 72.8673 131.611 72.899 131.611 72.9327C130.34 72.1833 128.888 71.778 127.389 71.778C123.524 71.778 120.188 74.4401 119.244 78.1219C119.145 78.1155 119.046 78.1113 118.945 78.1113C113.124 78.1113 108.389 82.8465 108.389 88.6669C108.389 94.4872 113.124 99.2224 118.945 99.2224H151.667C152.249 99.2224 152.722 98.7495 152.722 98.1669C152.722 97.5842 152.249 97.1113 151.667 97.1113H118.945C114.287 97.1113 110.5 93.324 110.5 88.6669C110.5 84.0097 114.287 80.2224 118.945 80.2224C119.192 80.2224 119.43 80.2583 119.669 80.29L119.966 80.3301C120.011 80.3364 120.053 80.3385 120.097 80.3385C120.617 80.3385 121.073 79.948 121.142 79.416C121.545 76.2641 124.231 73.8891 127.389 73.8891C129.257 73.8891 131.026 74.7356 132.247 76.2113C132.454 76.4604 132.755 76.5955 133.062 76.5955C133.226 76.5955 133.391 76.5575 133.543 76.4773C133.984 76.2514 134.206 75.7469 134.079 75.2676C133.836 74.3493 133.722 73.5766 133.722 72.8335C133.722 67.5959 137.985 63.3335 143.222 63.3335C148.249 63.3335 152.399 67.2855 152.667 72.3332C152.691 72.7723 152.984 73.1502 153.404 73.2832C153.51 73.317 153.617 73.3339 153.725 73.3339C154.042 73.3339 154.35 73.1882 154.553 72.9285C156.18 70.8554 158.589 69.6669 161.167 69.6669C165.824 69.6669 169.611 73.4542 169.611 78.1113C169.611 78.3583 169.575 78.5969 169.544 78.8354L169.504 79.1331C169.47 79.416 169.55 79.6989 169.727 79.9205C169.905 80.1422 170.164 80.2836 170.445 80.3111C174.786 80.7439 178.056 84.337 178.056 88.6669C178.056 93.324 174.268 97.1113 169.611 97.1113H158C157.417 97.1113 156.945 97.5842 156.945 98.1669C156.945 98.7495 157.417 99.2224 158 99.2224H169.611C175.432 99.2224 180.167 94.4872 180.167 88.6669C180.167 83.6065 176.601 79.3505 171.716 78.371C171.72 78.2844 171.722 78.1979 171.722 78.1113C171.722 72.291 166.987 67.5557 161.167 67.5557C158.684 67.5557 156.326 68.434 154.447 70.0131C153.185 64.938 148.616 61.2224 143.222 61.2224Z"
              fill="#472B29"
            />
            <path
              d="M140.056 76C137.094 76 134.548 78.109 133.906 80.9421C133.131 80.4734 132.247 80.2222 131.347 80.2222C128.81 80.2222 126.707 82.1159 126.38 84.588C125.951 84.4909 125.544 84.4444 125.145 84.4444C121.917 84.4444 119.21 86.9778 118.985 90.212C118.966 90.5033 119.185 90.7567 119.474 90.7778C119.487 90.7778 119.5 90.7778 119.512 90.7778C119.787 90.7778 120.019 90.5646 120.038 90.288C120.226 87.6048 122.468 85.5 125.145 85.5C125.628 85.5 126.137 85.5887 126.703 85.7681C126.749 85.7829 126.798 85.7892 126.844 85.7892C126.96 85.7892 127.076 85.747 127.174 85.6752C127.309 85.5781 127.389 85.405 127.389 85.2361C127.389 83.0532 129.164 81.2778 131.347 81.2778C132.291 81.2778 133.216 81.6324 133.946 82.2763C134.045 82.3629 134.17 82.4093 134.294 82.4093C134.362 82.4093 134.427 82.3967 134.491 82.3692C134.676 82.2953 134.803 82.1222 134.818 81.9217C135.037 79.192 137.336 77.0556 140.056 77.0556C140.495 77.0556 140.953 77.1273 141.495 77.2814C141.544 77.2962 141.595 77.3026 141.643 77.3026C141.873 77.3026 142.08 77.1484 142.148 76.9183C142.228 76.6376 142.065 76.3462 141.785 76.266C141.147 76.0844 140.596 76 140.056 76ZM169.364 79.1667C166.565 79.1667 164.069 81.0603 163.297 83.7731C163.217 84.0539 163.379 84.3452 163.66 84.4254C163.711 84.4381 163.759 84.4444 163.806 84.4444C164.036 84.4444 164.247 84.2924 164.312 84.0602C164.956 81.8013 167.033 80.2222 169.364 80.2222C169.611 80.2222 169.85 80.2518 170.086 80.2834C170.111 80.2877 170.135 80.2898 170.16 80.2898C170.415 80.2898 170.643 80.0956 170.679 79.8317C170.719 79.5424 170.517 79.2764 170.228 79.2384C169.945 79.2004 169.658 79.1667 169.364 79.1667Z"
              fill="#472B29"
            />
            <path
              d="M22.889 78.1112H1.77785C1.19518 78.1112 0.72229 77.6383 0.72229 77.0557C0.72229 76.473 1.19518 76.0001 1.77785 76.0001H22.889C23.4716 76.0001 23.9445 76.473 23.9445 77.0557C23.9445 77.6383 23.4737 78.1112 22.889 78.1112ZM29.2223 78.1112H27.1112C26.5285 78.1112 26.0556 77.6383 26.0556 77.0557C26.0556 76.473 26.5285 76.0001 27.1112 76.0001H29.2223C29.805 76.0001 30.2778 76.473 30.2778 77.0557C30.2778 77.6383 29.8071 78.1112 29.2223 78.1112ZM39.7588 82.3334H20.7778C20.1952 82.3334 19.7223 81.8606 19.7223 81.2779C19.7223 80.6952 20.1952 80.2223 20.7778 80.2223H39.7588C40.3415 80.2223 40.8144 80.6952 40.8144 81.2779C40.8144 81.8606 40.3415 82.3334 39.7588 82.3334ZM16.5556 82.3334H14.4445C13.8618 82.3334 13.389 81.8606 13.389 81.2779C13.389 80.6952 13.8618 80.2223 14.4445 80.2223H16.5556C17.1383 80.2223 17.6112 80.6952 17.6112 81.2779C17.6112 81.8606 17.1404 82.3334 16.5556 82.3334ZM10.2223 82.3334H6.00007C5.4174 82.3334 4.94451 81.8606 4.94451 81.2779C4.94451 80.6952 5.4174 80.2223 6.00007 80.2223H10.2223C10.805 80.2223 11.2778 80.6952 11.2778 81.2779C11.2778 81.8606 10.8071 82.3334 10.2223 82.3334ZM22.889 86.5557H18.6667C18.0841 86.5557 17.6112 86.0828 17.6112 85.5001C17.6112 84.9174 18.0841 84.4446 18.6667 84.4446H22.889C23.4716 84.4446 23.9445 84.9174 23.9445 85.5001C23.9445 86.0828 23.4716 86.5557 22.889 86.5557ZM29.2223 67.5557C28.8486 67.5557 27.4848 67.5557 27.1112 67.5557C26.5285 67.5557 26.0556 68.0286 26.0556 68.6112C26.0556 69.1939 26.5285 69.6668 27.1112 69.6668C27.4848 69.6668 28.8486 69.6668 29.2223 69.6668C29.805 69.6668 30.2778 69.1939 30.2778 68.6112C30.2778 68.0286 29.805 67.5557 29.2223 67.5557ZM29.2223 71.7779C28.8486 71.7779 19.0404 71.7779 18.6667 71.7779C18.0841 71.7779 17.6112 72.2508 17.6112 72.8334C17.6112 73.4161 18.0841 73.889 18.6667 73.889C19.0404 73.889 28.8486 73.889 29.2223 73.889C29.805 73.889 30.2778 73.4161 30.2778 72.8334C30.2778 72.2508 29.805 71.7779 29.2223 71.7779ZM39.7778 76.0001C39.4042 76.0001 33.8182 76.0001 33.4445 76.0001C32.8618 76.0001 32.389 76.473 32.389 77.0557C32.389 77.6383 32.8618 78.1112 33.4445 78.1112C33.8182 78.1112 39.4042 78.1112 39.7778 78.1112C40.3605 78.1112 40.8334 77.6383 40.8334 77.0557C40.8334 76.473 40.3605 76.0001 39.7778 76.0001Z"
              fill="#611515"
            />
            <path
              d="M143.222 21.1112H122.111C121.529 21.1112 121.056 20.6383 121.056 20.0556C121.056 19.4729 121.529 19.0001 122.111 19.0001H143.222C143.805 19.0001 144.278 19.4729 144.278 20.0556C144.278 20.6383 143.805 21.1112 143.222 21.1112ZM151.667 21.1112H147.445C146.862 21.1112 146.389 20.6383 146.389 20.0556C146.389 19.4729 146.862 19.0001 147.445 19.0001H151.667C152.249 19.0001 152.722 19.4729 152.722 20.0556C152.722 20.6383 152.249 21.1112 151.667 21.1112ZM162.222 25.3334H141.111C140.529 25.3334 140.056 24.8605 140.056 24.2778C140.056 23.6952 140.529 23.2223 141.111 23.2223H162.222C162.805 23.2223 163.278 23.6952 163.278 24.2778C163.278 24.8605 162.807 25.3334 162.222 25.3334ZM136.889 25.3334H134.778C134.195 25.3334 133.722 24.8605 133.722 24.2778C133.722 23.6952 134.195 23.2223 134.778 23.2223H136.889C137.472 23.2223 137.945 23.6952 137.945 24.2778C137.945 24.8605 137.472 25.3334 136.889 25.3334ZM130.492 25.3334H126.333C125.751 25.3334 125.278 24.8605 125.278 24.2778C125.278 23.6952 125.751 23.2223 126.333 23.2223H130.492C131.075 23.2223 131.548 23.6952 131.548 24.2778C131.548 24.8605 131.075 25.3334 130.492 25.3334ZM149.556 16.8889H139C138.417 16.8889 137.945 16.4161 137.945 15.8334C137.945 15.2507 138.417 14.7778 139 14.7778H149.556C150.138 14.7778 150.611 15.2507 150.611 15.8334C150.611 16.4161 150.14 16.8889 149.556 16.8889ZM143.222 29.5556H139C138.417 29.5556 137.945 29.0827 137.945 28.5001C137.945 27.9174 138.417 27.4445 139 27.4445H143.222C143.805 27.4445 144.278 27.9174 144.278 28.5001C144.278 29.0827 143.805 29.5556 143.222 29.5556Z"
              fill="#611515"
            />
            <path
              d="M99.9447 26.9167C86.927 26.9167 74.4424 32.088 65.2375 41.2929C56.0326 50.4978 50.8613 62.9824 50.8613 76.0001C50.8613 89.0178 56.0326 101.502 65.2375 110.707C74.4424 119.912 86.927 125.083 99.9447 125.083C112.962 125.083 125.447 119.912 134.652 110.707C143.857 101.502 149.028 89.0178 149.028 76.0001C149.028 62.9824 143.857 50.4978 134.652 41.2929C125.447 32.088 112.962 26.9167 99.9447 26.9167Z"
              fill="#F7BFBF"
            />
            <path
              d="M99.9445 126.561C72.0652 126.561 49.3834 103.88 49.3834 76.0003C49.3834 48.121 72.0652 25.4392 99.9445 25.4392C127.824 25.4392 150.506 48.121 150.506 76.0003C150.506 103.88 127.824 126.561 99.9445 126.561ZM99.9445 28.3948C73.6929 28.3948 52.339 49.7508 52.339 76.0003C52.339 102.25 73.6929 123.606 99.9445 123.606C126.196 123.606 147.55 102.25 147.55 76.0003C147.55 49.7508 126.196 28.3948 99.9445 28.3948Z"
              fill="#611515"
            />
            <path
              d="M139.26 65.4169C138.808 65.4169 138.39 65.1256 138.251 64.6717C138.071 64.0911 137.881 63.5169 137.676 62.9469C136.885 60.7344 135.884 58.5811 134.706 56.5397C134.413 56.0351 134.586 55.3891 135.092 55.0978C135.586 54.8043 136.239 54.9774 136.534 55.482C137.778 57.6332 138.831 59.9027 139.665 62.2333C139.88 62.8308 140.081 63.4388 140.269 64.051C140.44 64.6083 140.129 65.1994 139.57 65.3704C139.467 65.4021 139.363 65.4169 139.26 65.4169Z"
              fill="#472B29"
            />
            <path
              d="M99.9445 118.297C76.621 118.297 57.6484 99.3813 57.6484 76.1275C57.6484 52.8736 76.621 33.958 99.9445 33.958C112.048 33.958 123.595 39.145 131.626 48.1869C132.232 48.8709 132.819 49.576 133.378 50.298C133.737 50.7582 133.653 51.4211 133.192 51.78C132.734 52.1347 132.069 52.0545 131.71 51.5942C131.178 50.9081 130.623 50.241 130.047 49.5908C122.417 40.9986 111.446 36.0712 99.9445 36.0712C77.7863 36.0712 59.7595 54.041 59.7595 76.1296C59.7595 98.216 77.7863 116.188 99.9445 116.188C122.103 116.188 140.13 98.2181 140.13 76.1296C140.13 74.124 139.98 72.1016 139.68 70.1192C139.593 69.5429 139.988 69.0046 140.567 68.918C141.139 68.8483 141.679 69.2262 141.766 69.8047C142.08 71.8926 142.241 74.0206 142.241 76.1296C142.241 99.3792 123.268 118.297 99.9445 118.297Z"
              fill="#611515"
            />
            <path
              d="M67.222 125.611C67.222 125.611 70.5302 125.611 74.6109 125.611C78.6917 125.611 81.9998 122.303 81.9998 118.222C81.9998 114.462 79.1815 111.395 75.5504 110.928C75.6095 110.55 75.6665 110.172 75.6665 109.778C75.6665 105.697 72.3584 102.389 68.2776 102.389C66.0989 102.389 64.1609 103.349 62.8098 104.848C61.9992 101.031 58.615 98.1665 54.5554 98.1665C49.8919 98.1665 46.1109 101.948 46.1109 106.611C46.1109 107.014 46.1743 107.401 46.2292 107.789C45.3256 107.063 44.194 106.611 42.9443 106.611C40.3518 106.611 38.2048 108.484 37.7615 110.949C37.3836 110.89 37.0057 110.833 36.6109 110.833C32.5302 110.833 29.222 114.141 29.222 118.222C29.222 122.303 32.5302 125.611 36.6109 125.611C40.6917 125.611 52.4443 125.611 52.4443 125.611V126.667H67.222V125.611Z"
              fill="#F7BFBF"
            />
            <path
              d="M70.9165 116.111C70.6252 116.111 70.3887 115.875 70.3887 115.583C70.3887 113.001 72.4893 110.901 75.0712 110.901C75.143 110.92 76.6271 110.899 77.6974 111.188C77.9782 111.264 78.145 111.553 78.069 111.834C77.993 112.117 77.7037 112.284 77.423 112.206C76.4856 111.952 75.1007 111.952 75.0733 111.956C73.072 111.956 71.4443 113.584 71.4443 115.583C71.4443 115.875 71.2079 116.111 70.9165 116.111ZM56.6665 124.556C56.3866 124.556 56.1181 124.667 55.9201 124.865C55.7222 125.063 55.611 125.331 55.611 125.611C55.611 125.891 55.7222 126.16 55.9201 126.357C56.1181 126.555 56.3866 126.667 56.6665 126.667C56.9465 126.667 57.215 126.555 57.4129 126.357C57.6109 126.16 57.7221 125.891 57.7221 125.611C57.7221 125.331 57.6109 125.063 57.4129 124.865C57.215 124.667 56.9465 124.556 56.6665 124.556Z"
              fill="#472B29"
            />
            <path
              d="M74.6112 126.667H67.2223C66.6396 126.667 66.1667 126.194 66.1667 125.611C66.1667 125.028 66.6396 124.556 67.2223 124.556H74.6112C78.103 124.556 80.9445 121.714 80.9445 118.222C80.9445 115.064 78.5695 112.379 75.4176 111.975C75.1348 111.937 74.8793 111.79 74.7083 111.562C74.5373 111.334 74.4655 111.047 74.5099 110.766C74.5584 110.441 74.6112 110.116 74.6112 109.778C74.6112 106.286 71.7696 103.444 68.2779 103.444C66.4834 103.444 64.8199 104.194 63.5933 105.556C63.3294 105.849 62.9156 105.974 62.5377 105.868C62.1535 105.765 61.8601 105.456 61.7778 105.068C61.0579 101.682 58.02 99.2222 54.5556 99.2222C50.4812 99.2222 47.1667 102.537 47.1667 106.611C47.1667 106.913 47.2111 107.202 47.2533 107.494C47.3145 107.922 47.1203 108.418 46.7424 108.634C46.3645 108.849 45.9064 108.883 45.5686 108.612C44.7981 107.994 43.8924 107.667 42.9445 107.667C40.9052 107.667 39.1614 109.125 38.8004 111.137C38.6991 111.701 38.1755 112.079 37.5992 111.992C37.2741 111.942 36.949 111.889 36.6112 111.889C33.1194 111.889 30.2779 114.73 30.2779 118.222C30.2779 121.714 33.1194 124.556 36.6112 124.556H52.4445C53.0272 124.556 53.5001 125.028 53.5001 125.611C53.5001 126.194 53.0272 126.667 52.4445 126.667H36.6112C31.9541 126.667 28.1667 122.879 28.1667 118.222C28.1667 113.565 31.9541 109.778 36.6112 109.778C36.7357 109.778 36.8561 109.782 36.9785 109.79C37.8525 107.287 40.2233 105.556 42.9445 105.556C43.6813 105.556 44.3991 105.684 45.0789 105.936C45.4272 101.01 49.5439 97.1111 54.5556 97.1111C58.4211 97.1111 61.8727 99.4903 63.3231 102.967C64.7586 101.916 66.494 101.333 68.2779 101.333C72.935 101.333 76.7223 105.121 76.7223 109.778C76.7223 109.879 76.7202 109.978 76.7139 110.078C80.3935 111.023 83.0556 114.357 83.0556 118.222C83.0556 122.879 79.2683 126.667 74.6112 126.667Z"
              fill="#472B29"
            />
            <path
              d="M62.9999 124.555C62.6643 124.555 61.2245 124.555 60.8888 124.555C60.3061 124.555 59.8333 125.028 59.8333 125.611C59.8333 126.194 60.3061 126.667 60.8888 126.667C61.2245 126.667 62.6643 126.667 62.9999 126.667C63.5826 126.667 64.0555 126.194 64.0555 125.611C64.0555 125.028 63.5826 124.555 62.9999 124.555Z"
              fill="#472B29"
            />
            <path
              d="M116.364 98.5185L99.3974 86.3992L82.4303 98.5185V59.7367C82.4303 58.451 82.941 57.2179 83.8502 56.3088C84.7593 55.3997 85.9923 54.8889 87.278 54.8889H111.517C112.802 54.8889 114.035 55.3997 114.945 56.3088C115.854 57.2179 116.364 58.451 116.364 59.7367V98.5185Z"
              fill="#FDFCEE"
              stroke="#472B29"
              strokeWidth="2.49312"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="text-[#475467] text-sm text-center">Koleksi menu-menu lezat yang kamu nikmati dan jaga agar kenangan kulinermu tetap hidup!</p>
        </div>
        <div className="font-semibold">
          <Link legacyBehavior href="/signup">
            <a className="bg-brandPrimary600 text-white rounded-full px-4 py-2 mt-4 block text-center">Daftar Akun</a>
          </Link>
          <Link legacyBehavior href="/login">
            <a className="bg-brandPrimary50 text-brandPrimary600 rounded-full px-4 py-2 mt-4 block text-center">Masuk</a>
          </Link>
        </div>
      </motion.div>
    </Backdrop>
  );
}
