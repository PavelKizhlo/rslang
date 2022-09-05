import { View } from '../../../../interfaces/interfaces';
import './games.sass';

export default class Games implements View {
    html = `
      <svg display="none">
		<symbol id="lion" viewBox="0 0 107 112">
    	<g clip-path="url(#clip0_17_44308)">
        <path d="M53.2304 75.4243H52.572C51.8584 75.4243 51.2793 74.819 51.2793 74.0711C51.2793 73.3233 51.8584 72.718 52.572 72.718H53.2304C53.8449 72.718 54.1741 72.0703 54.1776 72.0631C56.2373 67.9352 58.7245 67.6772 60.062 67.5383C60.2335 67.5202 60.4705 67.4959 60.5446 67.4724C60.5834 67.4246 60.6386 67.1928 60.6386 67.0313C60.6386 66.804 60.3206 66.6199 60.3171 66.6181C58.5271 65.5997 54.1569 65.4698 52.6117 65.495C51.8998 65.551 51.3086 64.9159 51.2939 64.169C51.2802 63.4221 51.8472 62.8041 52.5608 62.7897C53.1908 62.7753 58.8046 62.7031 61.4625 64.1906C62.1381 64.5334 63.2249 65.4842 63.2249 67.0051C63.2516 67.8423 62.8974 69.4804 61.3901 70.0289C61.041 70.1561 60.6903 70.1922 60.318 70.231C59.2321 70.3437 57.8825 70.4836 56.4864 73.2809C56.127 74.0567 55.0144 75.4243 53.2304 75.4243Z" fill="black"/>
        <path d="M44.5434 68.3593C43.8945 68.3593 43.336 67.8505 43.2611 67.1596C43.2223 66.8068 42.3768 58.4202 46.9669 49.3633C47.3021 48.7029 48.0846 48.453 48.7146 48.8022C49.3446 49.1522 49.585 49.9713 49.2507 50.6316C45.051 58.9163 45.8215 66.7771 45.8293 66.8556C45.9077 67.598 45.3975 68.2664 44.6891 68.3494C44.64 68.3566 44.5917 68.3593 44.5434 68.3593Z" fill="black"/>
        <path d="M43.4198 83.9888C43.156 83.9888 42.8915 83.9807 42.6243 83.9626C39.645 83.7678 36.9001 82.5076 34.8973 80.4156C32.8496 78.2777 31.8163 75.5308 31.987 72.6821C32.3506 66.5587 35.6212 64.7104 38.3006 64.2386C38.9961 64.1132 39.6709 64.6111 39.7907 65.3481C39.9096 66.0851 39.4347 66.7833 38.7306 66.9069C37.0777 67.1983 34.8482 68.1311 34.5681 72.8517C34.444 74.9138 35.2101 76.9192 36.7243 78.4996C38.2825 80.1261 40.4353 81.1075 42.7863 81.2618C47.5806 81.5802 51.6819 78.312 51.9405 73.9892C51.9853 73.2441 52.5946 72.6739 53.3116 72.7236C54.0235 72.7705 54.5656 73.4128 54.5208 74.1588C54.189 79.721 49.2861 83.9888 43.4198 83.9888Z" fill="black"/>
        <path d="M63.4736 83.9889C57.6064 83.9889 52.7044 79.722 52.3717 74.1589C52.3269 73.4128 52.869 72.7705 53.5809 72.7236C54.3125 72.674 54.9072 73.2441 54.952 73.9893C55.2105 78.312 59.3205 81.5776 64.1062 81.2619C68.8961 80.9479 72.5829 77.1754 72.3244 72.8526C72.0417 68.132 69.8139 67.1984 68.1618 66.9079C67.4577 66.7843 66.9829 66.0861 67.1018 65.3491C67.2208 64.6121 67.8921 64.1142 68.5919 64.2395C71.2695 64.7113 74.5393 66.5597 74.9055 72.6839C75.252 78.4961 70.4801 83.5568 64.2682 83.9636C64.001 83.9798 63.7364 83.9889 63.4736 83.9889Z" fill="black"/>
        <path d="M53.9004 75.4244H53.2403C51.4589 75.4244 50.3463 74.0568 49.9697 73.2486C48.5899 70.4846 47.2403 70.3447 46.1553 70.232C45.783 70.1932 45.4314 70.1571 45.0832 70.0299C43.575 69.4824 43.22 67.8433 43.2476 66.9619C43.2467 65.4843 44.3343 64.5344 45.0117 64.1925C47.6695 62.7059 53.2799 62.7772 53.9125 62.7916C54.6261 62.806 55.1923 63.424 55.1793 64.1709C55.1638 64.9178 54.5735 65.5285 53.8616 65.497C52.3164 65.4708 47.9462 65.6007 46.2139 66.5885C46.1872 66.6038 46.1605 66.6173 46.1329 66.6309C46.1363 66.6309 45.8321 66.814 45.8321 67.007C45.8321 67.1938 45.8873 67.4247 45.9407 67.4824C46.0028 67.4969 46.238 67.5212 46.4104 67.5393C47.7479 67.6782 50.2351 67.9362 52.2776 72.0298C52.2974 72.0713 52.6335 72.7181 53.2403 72.7181H53.9004C54.614 72.7181 55.1931 73.3234 55.1931 74.0713C55.1931 74.8191 54.614 75.4244 53.9004 75.4244Z" fill="black"/>
        <path d="M62.0223 68.36C61.9732 68.36 61.9249 68.3573 61.8749 68.351C61.1665 68.2671 60.6563 67.5978 60.7365 66.8563C60.7442 66.7778 61.5147 58.917 57.3168 50.6314C56.9824 49.9711 57.2229 49.152 57.8529 48.802C58.4846 48.4528 59.2671 48.7036 59.6006 49.364C64.1889 58.4209 63.3435 66.8066 63.3047 67.1603C63.2306 67.8503 62.6713 68.36 62.0223 68.36Z" fill="black"/>
        <path d="M53.4205 92.656C45.878 92.656 41.375 89.1081 41.375 83.1651C41.375 82.4173 41.9541 81.812 42.6677 81.812C43.3813 81.812 43.9604 82.4173 43.9604 83.1651C43.9604 89.0684 49.8871 89.9497 53.4205 89.9497C57.7374 89.9497 62.8824 88.7725 62.8824 83.1651C62.8824 82.4173 63.4615 81.812 64.1751 81.812C64.8887 81.812 65.4678 82.4173 65.4678 83.1651C65.467 89.1965 61.0769 92.656 53.4205 92.656Z" fill="black"/>
        <path d="M36.9831 52.7587C34.239 52.7587 32.0078 50.4223 32.0078 47.551C32.0078 46.0725 32.6119 44.658 33.6651 43.6702C34.5786 42.8142 35.7558 42.3433 36.9805 42.3433C36.9822 42.3433 36.9839 42.3433 36.9848 42.3433C39.7279 42.3433 41.9592 44.6788 41.9592 47.5501C41.9583 50.4223 39.7262 52.7587 36.9831 52.7587ZM36.9805 45.0495C36.3919 45.0495 35.8274 45.275 35.3896 45.6864C34.8828 46.1609 34.5924 46.8411 34.5924 47.551C34.5924 48.9303 35.6645 50.0525 36.9822 50.0525C38.2999 50.0525 39.372 48.9303 39.372 47.551C39.372 46.1717 38.2999 45.0504 36.9822 45.0504C36.9822 45.0495 36.9813 45.0495 36.9805 45.0495Z" fill="black"/>
        <path d="M41.4386 54.624C41.0775 54.624 40.7181 54.467 40.4621 54.1594L38.3059 51.5659C37.837 51.0021 37.8939 50.1469 38.4326 49.6571C38.9712 49.1655 39.7873 49.2259 40.2561 49.7888L42.4124 52.3823C42.8812 52.9461 42.8243 53.8013 42.2857 54.2911C42.041 54.5148 41.7385 54.624 41.4386 54.624Z" fill="black"/>
        <path d="M34.3693 46.1212C34.0082 46.1212 33.6488 45.9642 33.3928 45.6557L30.8996 42.6563C30.4308 42.0925 30.4877 41.2382 31.0263 40.7475C31.5658 40.2567 32.3811 40.3163 32.8499 40.8801L35.3431 43.8795C35.8119 44.4433 35.7551 45.2976 35.2164 45.7883C34.9725 46.012 34.67 46.1212 34.3693 46.1212Z" fill="black"/>
        <path d="M34.6945 68.6983C34.062 68.6983 33.5104 68.2112 33.4173 67.5401C33.4018 67.4472 32.8425 64.3368 28.4275 60.2548C22.9515 55.1923 19.2224 45.0953 22.6895 35.5919C22.9446 34.8937 23.6909 34.5428 24.3588 34.8107C25.025 35.0768 25.3603 35.8598 25.1052 36.558C22.0905 44.822 25.4482 53.8897 30.1399 58.227C35.3194 63.0152 35.9269 66.7571 35.9787 67.1675C36.0717 67.9081 35.5745 68.5892 34.8669 68.6875C34.8092 68.6947 34.7523 68.6983 34.6945 68.6983Z" fill="black"/>
        <path d="M18.5507 29.7283C18.3206 29.7283 18.0896 29.6651 17.8802 29.5307C12.7119 26.2399 10.7659 19.4941 13.4496 14.1754C14.7078 11.6893 16.7822 9.92302 19.291 9.20045C22.0057 8.42015 24.9608 8.92261 27.6161 10.6149C29.2363 11.6478 30.6315 13.0695 31.6528 14.7284C32.0397 15.3563 31.8665 16.1943 31.2667 16.5984C30.6677 17.0035 29.8671 16.8231 29.4802 16.1943C28.6701 14.8782 27.56 13.7479 26.2716 12.927C24.23 11.6252 21.9927 11.2292 19.977 11.8111C18.162 12.3334 16.6555 13.6225 15.7343 15.4411C13.6892 19.4959 15.2206 24.6703 19.2229 27.2205C19.833 27.6093 20.0269 28.4419 19.6555 29.0797C19.4125 29.4973 18.9867 29.7283 18.5507 29.7283Z" fill="black"/>
        <path d="M22.1956 25.8229C21.9767 25.8229 21.7561 25.7652 21.5561 25.6452C19.9514 24.6872 18.8845 23.0093 18.7018 21.1555C18.5579 19.7068 18.9724 18.3446 19.8713 17.3226C20.765 16.3077 22.0396 15.7692 23.3909 15.7953C25.2481 15.835 27.0278 16.9356 28.0352 18.6658C28.3412 19.1926 28.2688 19.8701 27.8586 20.313L23.1238 25.4125C22.8738 25.6822 22.5369 25.8229 22.1956 25.8229ZM23.2858 18.5007C22.6817 18.5007 22.1473 18.7316 21.7742 19.1556C21.3855 19.5985 21.208 20.2092 21.2743 20.8768C21.3381 21.529 21.6277 22.1595 22.0741 22.6611L25.199 19.2954C24.6699 18.8101 24.002 18.516 23.3384 18.5016C23.3203 18.5007 23.3039 18.5007 23.2858 18.5007Z" fill="black"/>
        <path d="M26.6411 12.6711C25.9534 12.6711 25.382 12.1054 25.351 11.3793C25.3182 10.6323 25.8707 9.99999 26.5842 9.96661C28.4983 9.8755 35.1412 5.48867 39.246 2.40174C39.2813 2.37467 39.3192 2.34942 39.3572 2.32686C43.2767 -0.0248692 46.7127 -0.59679 49.5739 0.629142C53.4814 2.30521 54.6957 6.70828 54.7457 6.89411C54.9387 7.61398 54.5363 8.36 53.8485 8.56207C53.1651 8.76233 52.4507 8.34466 52.2568 7.62751C52.2404 7.56887 51.2993 4.28078 48.5742 3.12521C46.5068 2.24838 43.8567 2.75806 40.699 4.64071C38.8203 6.05066 30.0401 12.5123 26.6997 12.6702C26.6808 12.6702 26.6601 12.6711 26.6411 12.6711Z" fill="black"/>
        <path d="M53.3582 112C53.0885 112 52.8153 111.912 52.5826 111.729C44.0214 104.996 37.0502 98.4817 34.4975 95.8909C34.3329 98.9002 33.702 100.48 32.6187 100.593C32.1275 100.641 31.2726 100.495 30.9761 98.9345C30.6211 97.0771 25.8458 89.9912 18.3583 83.6324C13.7588 79.7273 11.126 75.6192 9.71866 72.8309C8.65001 74.8949 7.20476 76.2823 7.11427 76.3689C6.63251 76.8235 5.90514 76.837 5.41046 76.3977C4.91578 75.9593 4.80806 75.2043 5.15881 74.6342C5.67935 73.7591 5.13296 68.8464 3.98675 64.1222C3.97899 64.0915 3.97296 64.0599 3.96779 64.0284C-0.855772 35.8797 13.6003 23.827 14.2182 23.3272C14.7835 22.8708 15.5954 22.979 16.0314 23.5708C16.4667 24.1617 16.3641 25.0096 15.8005 25.467C15.66 25.5798 1.99683 37.0903 6.50238 63.5033C6.90657 65.1704 7.54517 68.0832 7.80716 70.7624C8.03899 70.1842 8.20704 69.5672 8.25961 68.933C8.31305 68.2862 8.79911 67.7702 9.41703 67.7044C10.0263 67.6349 10.6089 68.0408 10.7864 68.6642C10.8045 68.7282 12.8117 75.4379 19.9872 81.5306C25.5838 86.2846 29.7748 91.4364 31.9276 94.9762C31.9448 94.6803 31.9543 94.4015 31.9543 94.1589C31.9543 93.9965 31.9819 93.8359 32.037 93.6844C32.2499 93.089 32.7644 92.4007 33.5676 92.2519C33.9692 92.1779 34.7552 92.1932 35.5213 93.1287C36.3702 94.1652 44.1481 101.712 54.1356 109.566C54.7061 110.015 54.8216 110.863 54.3924 111.46C54.1382 111.814 53.7504 112 53.3582 112Z" fill="black"/>
        <path d="M31.8777 26.3528C31.5924 26.3528 31.3054 26.2544 31.0667 26.0524C30.5108 25.5824 30.4246 24.7308 30.8728 24.1499C34.0494 20.0364 38.4249 19.331 41.255 19.3707C40.7207 18.9584 40.0304 18.5507 39.1531 18.2376C38.6351 18.0527 38.2844 17.5484 38.2766 16.9765C38.2689 16.4046 38.6058 15.8886 39.1177 15.6892C39.4952 15.5422 48.4141 12.1531 54.2477 17.9291C54.7665 18.4424 54.7889 19.2994 54.2986 19.8415C53.8082 20.3855 52.9886 20.4071 52.4707 19.8948C49.6879 17.1389 45.808 17.0703 43.1209 17.47C44.1688 18.363 44.7592 19.2642 45.0263 19.7405C45.5805 20.2754 45.5081 20.9204 45.465 21.1306C45.4124 21.3877 45.1478 22.2375 43.937 22.3638C43.7931 22.3782 43.6457 22.3683 43.5044 22.3322C43.2372 22.2663 36.8262 20.7481 32.886 25.8521C32.6283 26.1805 32.2543 26.3528 31.8777 26.3528Z" fill="black"/>
        <path d="M74.9407 26.3526C74.5632 26.3526 74.19 26.1812 73.9341 25.8502C69.9939 20.7444 63.5828 22.2635 63.3122 22.3311C63.1735 22.3654 63.0244 22.3771 62.883 22.3618C61.6722 22.2355 61.4068 21.3858 61.3551 21.1287C61.312 20.9185 61.2396 20.2735 61.7937 19.7386C62.0609 19.2623 62.6512 18.3602 63.6992 17.468C61.0112 17.0684 57.133 17.136 54.3494 19.8928C53.8306 20.4061 53.0119 20.3835 52.5215 19.8396C52.0311 19.2965 52.0535 18.4405 52.5723 17.9272C58.4042 12.1511 67.3248 15.5403 67.7023 15.6873C68.2142 15.8867 68.5503 16.4017 68.5434 16.9746C68.5365 17.5474 68.1849 18.0517 67.667 18.2357C66.7896 18.5487 66.0993 18.9564 65.565 19.3687C68.3943 19.3272 72.7715 20.0335 75.9473 24.1479C76.3963 24.7298 76.3092 25.5813 75.7534 26.0504C75.5129 26.2543 75.2259 26.3526 74.9407 26.3526Z" fill="black"/>
        <path d="M70.0202 52.7588C67.2762 52.7588 65.0449 50.4224 65.0449 47.5511C65.0449 44.6797 67.277 42.3442 70.0202 42.3442C70.0219 42.3442 70.0236 42.3442 70.0245 42.3442C71.2491 42.3442 72.4255 42.8151 73.339 43.6703C74.3921 44.6563 74.9963 46.0707 74.9963 47.5511C74.9954 50.4224 72.7633 52.7588 70.0202 52.7588ZM70.0236 45.0496C70.0227 45.0496 70.0219 45.0496 70.021 45.0496C68.7025 45.0496 67.6304 46.1718 67.6304 47.5502C67.6304 48.9294 68.7025 50.0516 70.0202 50.0516C71.3379 50.0516 72.41 48.9294 72.41 47.5502C72.41 46.8384 72.1195 46.1592 71.6137 45.6865C71.175 45.276 70.6105 45.0496 70.0236 45.0496Z" fill="black"/>
        <path d="M65.5649 54.624C65.2641 54.624 64.9625 54.5149 64.7177 54.292C64.1791 53.8022 64.1222 52.947 64.591 52.3832L66.7456 49.7897C67.2144 49.2259 68.0305 49.1664 68.5692 49.6571C69.1078 50.147 69.1647 51.0021 68.6958 51.5659L66.5413 54.1594C66.2853 54.467 65.926 54.624 65.5649 54.624Z" fill="black"/>
        <path d="M72.6352 46.1212C72.3344 46.1212 72.0328 46.0121 71.788 45.7893C71.2494 45.2985 71.1925 44.4443 71.6613 43.8805L74.1546 40.881C74.6234 40.3172 75.4387 40.2577 75.9781 40.7484C76.5168 41.2392 76.5737 42.0934 76.1048 42.6572L73.6116 45.6567C73.3557 45.9634 72.9963 46.1212 72.6352 46.1212Z" fill="black"/>
        <path d="M72.3063 68.6984C72.2495 68.6984 72.1917 68.6948 72.134 68.6867C71.4264 68.5884 70.9292 67.9073 71.0231 67.1667C71.0765 66.7554 71.685 63.0153 76.8636 58.2271C81.5545 53.8898 84.9129 44.8212 81.8966 36.5581C81.6415 35.8608 81.9759 35.0778 82.6429 34.8108C83.3057 34.5465 84.0563 34.8929 84.3123 35.592C87.7802 45.0945 84.052 55.1924 78.576 60.2549C74.0963 64.3973 73.5904 67.4942 73.587 67.5248C73.5 68.2041 72.9441 68.6984 72.3063 68.6984Z" fill="black"/>
        <path d="M88.453 29.7283C88.0169 29.7283 87.5912 29.4974 87.3481 29.0788C86.9767 28.4401 87.1706 27.6084 87.7808 27.2196C91.7839 24.6703 93.3145 19.496 91.2668 15.4393C90.3472 13.6216 88.8408 12.3325 87.0258 11.8102C85.0109 11.2293 82.7728 11.6244 80.7303 12.9261C79.441 13.7479 78.3327 14.8773 77.5243 16.1925C77.1374 16.8213 76.3368 17.0017 75.7378 16.5985C75.138 16.1943 74.9639 15.3572 75.35 14.7284C76.3695 13.0704 77.7648 11.6478 79.3859 10.614C82.0428 8.92173 85.0023 8.41837 87.7118 9.20047C90.2206 9.92304 92.2941 11.6884 93.5515 14.1737C96.2377 19.4941 94.2926 26.239 89.1235 29.5307C88.914 29.6651 88.6822 29.7283 88.453 29.7283Z" fill="black"/>
        <path d="M84.8076 25.8231C84.4663 25.8231 84.1302 25.6824 83.8803 25.4126L79.1438 20.3132C78.7318 19.8711 78.6594 19.1928 78.9662 18.666C79.9737 16.9358 81.7525 15.8352 83.6105 15.7955C84.9929 15.7667 86.2373 16.307 87.1293 17.321C88.029 18.343 88.4444 19.7052 88.3014 21.1557C88.117 23.0086 87.0509 24.6865 85.4479 25.6445C85.2471 25.7645 85.0265 25.8231 84.8076 25.8231ZM81.8033 19.2938L84.9291 22.6595C85.3755 22.1579 85.6651 21.5283 85.7297 20.8761C85.7961 20.2085 85.6177 19.5969 85.2282 19.154C84.8455 18.7183 84.2741 18.4774 83.6648 18.5C83.0004 18.5153 82.3325 18.8094 81.8033 19.2938Z" fill="black"/>
        <path d="M80.3617 12.6709C80.3428 12.6709 80.3221 12.6709 80.3031 12.67C76.9645 12.5121 68.1826 6.0505 66.3038 4.64055C63.1453 2.7579 60.4952 2.24732 58.4286 3.12505C55.6932 4.28513 54.7547 7.59397 54.7461 7.62735C54.5487 8.3436 53.8326 8.76307 53.15 8.55739C52.4649 8.35443 52.065 7.61201 52.2572 6.89395C52.3072 6.70722 53.5215 2.30505 57.4289 0.628982C60.2893 -0.597852 63.7262 -0.0268334 67.6457 2.3267C67.6836 2.34926 67.7215 2.37451 67.7569 2.40158C71.8634 5.4876 78.5062 9.87534 80.4186 9.96645C81.1322 10.0007 81.6846 10.6331 81.6519 11.3791C81.6208 12.1044 81.0486 12.6709 80.3617 12.6709Z" fill="black"/>
        <path d="M53.6451 112C53.253 112 52.8652 111.813 52.611 111.46C52.1818 110.863 52.2973 110.014 52.8678 109.565C62.8519 101.715 70.6306 94.166 71.4803 93.1286C72.2448 92.1931 73.0333 92.1778 73.4341 92.2518C74.2381 92.4006 74.7518 93.0898 74.9646 93.6843C75.0189 93.8358 75.0474 93.9973 75.0474 94.1588C75.0474 94.4014 75.0577 94.6802 75.0741 94.9761C77.2278 91.4363 81.4188 86.2836 87.0162 81.5305C94.2339 75.4009 96.1954 68.7308 96.2152 68.6641C96.3919 68.0407 96.9693 67.6339 97.5846 67.7043C98.2025 67.7701 98.6877 68.2861 98.742 68.9329C98.7955 69.5644 98.9644 70.1805 99.1962 70.7578C99.4582 68.0795 100.096 65.1685 100.499 63.5024C105.023 36.9874 91.3442 25.5797 91.2055 25.4678C90.641 25.0114 90.5367 24.1616 90.9719 23.5698C91.4089 22.9781 92.2198 22.8698 92.7852 23.3263C93.4031 23.8251 107.857 35.8788 103.036 64.0274C103.03 64.0589 103.024 64.0905 103.017 64.1212C101.871 68.8454 101.324 73.7582 101.846 74.6332C102.188 75.206 102.079 75.9619 101.583 76.3949C101.088 76.8279 100.369 76.8207 99.8917 76.3679C99.8003 76.2813 98.3542 74.8939 97.2847 72.8299C95.8774 75.6183 93.2445 79.7263 88.6468 83.6324C81.1594 89.9911 76.3832 97.0761 76.0273 98.9344C75.7291 100.495 74.8742 100.641 74.3846 100.592C73.3013 100.48 72.6714 98.901 72.5059 95.8917C69.9524 98.4834 62.9803 104.999 54.4225 111.729C54.1881 111.912 53.9149 112 53.6451 112Z" fill="black"/>
      </g>
      <defs>
      <clipPath id="clip0_17_44308">
      <rect width="107" height="112" fill="white"/>
      </clipPath>
      </defs>
    </symbol>
    <symbol id="audioGame" viewBox="0 0 93 66">
      <path d="M85.7498 33.3457L84.6248 33.2304C83.8748 28.8499 78.2498 0.952637 46.7498 0.952637C15.2498 0.952637 9.62484 28.8499 8.87484 33.2304L7.74984 33.3457C3.49984 33.8068 0.374841 37.3804 0.874841 41.4151L3.12484 58.5915C3.37484 60.5512 4.37484 62.2804 5.99984 63.4332C7.37484 64.4707 9.12484 64.9318 10.8748 64.9318C11.1248 64.9318 11.4998 64.9318 11.8748 64.9318L19.4998 64.1249L20.6248 64.0096C21.3748 63.8943 22.1248 63.5485 22.6248 62.9721C23.1248 62.3957 23.3748 61.704 23.2498 60.8971L19.7498 34.8443C19.7498 34.4985 19.6248 34.2679 19.4998 33.9221C19.7498 32.0776 22.4998 11.0971 46.7498 11.0971C70.9998 11.0971 73.8748 32.0776 73.9998 33.9221C73.8748 34.1526 73.7498 34.4985 73.7498 34.8443L70.3748 61.0124C70.2498 61.704 70.4998 62.3957 70.9998 63.0873C71.4998 63.6637 72.2498 64.0096 72.9998 64.1249L74.1248 64.2401L81.7498 65.0471C81.9998 65.0471 82.3748 65.0471 82.7498 65.0471C84.4998 65.0471 86.2498 64.4707 87.6248 63.5485C89.2498 62.3957 90.3748 60.6665 90.4998 58.7068L92.7498 41.5304C93.1248 37.4957 90.1248 33.8068 85.7498 33.3457ZM18.2498 62.511L11.6248 63.2026C9.99984 63.4332 8.49984 62.9721 7.24984 62.0499C5.99984 61.1276 5.24984 59.8596 4.99984 58.361L2.74984 41.1846C2.37484 38.1874 4.74984 35.4207 7.99984 35.0749L14.4998 34.3832C14.8748 38.4179 16.2498 54.7873 18.2498 62.511ZM21.2498 61.1276C21.2498 61.3582 21.2498 61.704 20.9998 61.9346C20.7498 62.1651 20.4998 62.2804 20.2498 62.2804H19.9998C17.9998 54.7874 16.6248 37.9568 16.2498 34.1526H16.4998H16.6248C16.8748 34.1526 17.1248 34.2679 17.2498 34.3832C17.4998 34.4985 17.6248 34.729 17.6248 35.0749L21.2498 61.1276ZM46.7498 9.36791C23.7498 9.36791 18.7498 27.5818 17.7498 32.654C17.3748 32.5387 16.8748 32.4235 16.3748 32.5387L15.2498 32.654C15.2498 32.654 15.1248 32.654 14.9998 32.654L10.8748 32.9999C11.7498 27.6971 17.6248 2.6818 46.7498 2.6818C75.8748 2.6818 81.7498 27.8124 82.6248 32.9999L78.3748 32.5387C78.3748 32.5387 78.2498 32.5387 78.1248 32.5387L76.9998 32.4235C76.4998 32.4235 76.1248 32.4235 75.6248 32.5387C74.8748 27.5818 69.7498 9.36791 46.7498 9.36791ZM73.4998 62.2804H73.2498C72.9998 62.2804 72.7498 62.0499 72.4998 61.9346C72.3748 61.704 72.2498 61.4735 72.2498 61.1276L75.6248 34.9596C75.6248 34.729 75.8748 34.3832 75.9998 34.2679C76.2498 34.1526 76.3748 34.0374 76.6248 34.0374H76.7498H76.9998C76.8748 38.0721 75.4998 54.9026 73.4998 62.2804ZM90.7498 41.1846L88.6248 58.361C88.4998 59.8596 87.6248 61.1276 86.3748 62.0499C85.1248 62.9721 83.6248 63.3179 81.9998 63.2026L75.3748 62.511C77.3748 54.7873 78.7498 38.4179 79.1248 34.3832L85.6248 35.0749C88.8748 35.4207 91.2498 38.1874 90.7498 41.1846Z"/>
    </symbol>
	</svg>
    <div class="games_item-wrapper">
          <div class="games">
            <div class="games_item">
              <a href="#/games/sprint/" data-link class="games_item__container" id="game_sprint">
                <div class="games_item__img-bg">
                  <div class="games_item__img">
                    <svg class="lion">
                      <use xlink:href="#lion"></use>
                    </svg>
                  </div>
                </div>
                <p class="games_item__name">Спринт</p>
                <p class="games_item__about">
                  Тренирует навык быстрого перевода с английского языка на русский. Вам нужно выбрать соответствует ли перевод предложенному слову.
                </p>
              </a>
              <a href="#/games/audiocall/" data-link class="games_item__container" id="game_audiocall">
                <div class="games_item__img-bg">
                  <div class="games_item__img">
                    <svg class="audioGame">
                      <use xlink:href="#audioGame"></use>
                    </svg>
                  </div>
                </div>
                <p class="games_item__name">Аудиовызов</p>
                <p class="games_item__about">
                  Тренировка Аудиовызов улучшает восприятие речи на слух.
                </p>
              </a>
            </div>
        </div>
    </div>`;

    render() {
        const MAIN = <HTMLElement>document.getElementById('main');
        MAIN.insertAdjacentHTML('beforeend', this.html);
    }
}
