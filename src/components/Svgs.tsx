import * as React from "react";

import { SVGProps } from "react";

export const Logo = (props: SVGProps<SVGSVGElement>) => {
  const fill = props.fill || "none";
  return (
    <svg
      width={256}
      height={222}
      viewBox="0 0 256 222"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M231 169.015C231 166.315 228.81 164.115 226.1 164.115C223.39 164.115 221.2 166.305 221.2 169.015C221.2 171.725 223.39 173.915 226.1 173.915C228.81 173.915 231 171.725 231 169.015Z"
        fill="black"
      />
      <path
        d="M227.1 152.605H219.47C217.99 145.585 211.74 140.295 204.29 140.295C198.93 140.295 194.19 143.035 191.4 147.175C185.57 144.305 180.39 140.435 175.96 135.625C164.72 123.405 148.75 116.395 132.14 116.395C103.12 116.395 79.52 140.005 79.52 169.015C79.52 188.525 90.2 205.585 106.02 214.665H37.41C20.64 214.665 6.98999 201.015 6.98999 184.245C6.98999 183.945 6.99 183.645 7 183.345C7.28 173.705 12.56 165.195 21.13 160.575C29.9 155.855 40.18 156.145 48.61 161.365L70.96 175.195C72.6 176.205 74.75 175.705 75.76 174.065C76.77 172.425 76.27 170.275 74.63 169.265L52.28 155.435C41.7 148.885 28.82 148.515 17.82 154.435C7.03001 160.245 0.369989 170.975 0.019989 183.135C0.00998901 183.505 0 183.865 0 184.235C0 204.855 16.77 221.625 37.39 221.625H126.26C126.68 221.625 127.09 221.545 127.46 221.405C129 221.545 130.55 221.625 132.12 221.625H177.76C177.88 221.625 178 221.625 178.11 221.605C178.16 221.605 178.2 221.595 178.24 221.585C178.31 221.585 178.38 221.565 178.45 221.555C178.5 221.545 178.55 221.525 178.6 221.515C178.66 221.495 178.72 221.485 178.78 221.465C178.83 221.445 178.88 221.425 178.93 221.405C178.99 221.385 179.04 221.365 179.1 221.345C179.15 221.325 179.2 221.295 179.25 221.275C179.3 221.255 179.35 221.225 179.4 221.205C179.45 221.175 179.49 221.145 179.54 221.115C179.59 221.085 179.64 221.055 179.69 221.025C179.73 220.995 179.78 220.965 179.82 220.935C179.87 220.905 179.92 220.865 179.96 220.835C180 220.805 180.04 220.765 180.08 220.735C180.12 220.695 180.17 220.655 180.21 220.615C180.25 220.575 180.28 220.535 180.31 220.505C180.35 220.465 180.39 220.415 180.43 220.375C180.46 220.335 180.49 220.295 180.52 220.255C180.56 220.205 180.6 220.155 180.63 220.105C180.66 220.065 180.68 220.025 180.71 219.975C180.74 219.925 180.78 219.865 180.81 219.815C180.83 219.775 180.85 219.725 180.87 219.685C180.9 219.625 180.93 219.575 180.95 219.515C180.97 219.465 180.99 219.425 181 219.375C181.02 219.315 181.05 219.255 181.06 219.195C181.08 219.145 181.09 219.095 181.1 219.045C181.12 218.985 181.13 218.925 181.15 218.865C181.16 218.815 181.17 218.765 181.17 218.705C181.18 218.645 181.19 218.575 181.2 218.515C181.2 218.465 181.2 218.415 181.2 218.355C181.2 218.295 181.21 218.235 181.21 218.175C181.21 218.155 181.21 218.125 181.21 218.075V182.125C181.21 180.195 179.65 178.635 177.72 178.635C175.79 178.635 174.23 180.195 174.23 182.125V196.995C169.84 190.635 162.4 183.975 149.8 180.715C147.94 180.235 146.03 181.355 145.55 183.215C145.07 185.075 146.19 186.985 148.05 187.465C168.26 192.695 172.87 207.785 173.92 214.655H132.07C106.9 214.655 86.42 194.175 86.42 169.005C86.42 143.835 106.9 123.355 132.07 123.355C146.73 123.355 160.83 129.545 170.76 140.335C175.93 145.955 182 150.445 188.85 153.715C188.76 154.395 188.71 155.095 188.71 155.805C188.71 164.365 195.67 171.325 204.23 171.325C206.15 171.325 207.72 169.765 207.72 167.835C207.72 165.905 206.16 164.345 204.23 164.345C199.52 164.345 195.68 160.515 195.68 155.795C195.68 151.075 199.52 147.245 204.23 147.245C208.94 147.245 212.78 151.075 212.78 155.795C212.78 155.815 212.78 155.825 212.78 155.845C212.78 155.925 212.77 155.995 212.77 156.075C212.77 158.005 214.33 159.565 216.26 159.565H227.04C240.9 159.565 247.11 167.895 248.81 170.715C246.03 183.595 237.19 195.635 224.28 204.145C219.25 201.705 213.65 201.135 208.64 202.665C206.8 203.225 205.76 205.175 206.33 207.015C206.89 208.855 208.84 209.895 210.68 209.325C215.7 207.785 220.89 209.755 224.07 212.115C225.2 212.945 226.08 213.815 226.75 214.655H187.88C185.96 214.655 184.39 216.215 184.39 218.145C184.39 220.075 185.95 221.635 187.88 221.635H231.82C233.74 221.635 235.31 220.075 235.31 218.145C235.31 214.865 233.52 211.345 230.43 208.375C233.83 205.945 236.95 203.285 239.77 200.435L239.93 201.525C240.19 203.235 241.65 204.495 243.38 204.495H247.64C249.38 204.495 250.85 203.215 251.09 201.495L254.78 175.525C255.23 173.955 255.61 172.375 255.91 170.785C256.04 170.075 255.95 169.345 255.65 168.695C255.35 168.035 247.99 152.585 227.05 152.585L227.1 152.605Z"
        fill="black"
      />
      <path
        d="M242.12 56.705L224.3 47.395V12.475C224.3 10.545 222.74 8.98499 220.81 8.98499H188.07C186.14 8.98499 184.58 10.545 184.58 12.475V26.645L138.68 2.655C131.9 -0.885 124.13 -0.885 117.34 2.655L13.91 56.705C5.46 61.115 0 70.545 0 80.715V146.125C0 147.855 1.16002 149.455 2.86002 149.755C5.06002 150.135 6.97 148.455 6.97 146.325V80.715C6.97 73.105 10.96 66.105 17.13 62.875L120.56 8.82501C125.29 6.35501 130.71 6.35501 135.44 8.82501L186.34 35.425C187.1 35.825 187.98 35.985 188.81 35.795C190.46 35.415 191.54 33.975 191.54 32.385V15.945H217.31V49.495C217.31 50.795 218.03 51.985 219.18 52.585L238.87 62.875C245.04 66.095 249.02 73.095 249.02 80.705V143.845C249.02 145.575 250.18 147.175 251.88 147.475C254.08 147.855 255.99 146.175 255.99 144.045V80.705C255.99 70.525 250.53 61.095 242.09 56.695L242.12 56.705Z"
        fill="black"
      />
      <path
        d="M49.8 170.175C48.5 168.755 46.29 168.655 44.88 169.965L21.94 190.995C20.52 192.295 20.43 194.505 21.73 195.915C22.42 196.665 23.36 197.045 24.3 197.045C25.14 197.045 25.99 196.745 26.65 196.125L49.59 175.095C51.01 173.795 51.1 171.585 49.8 170.175Z"
        fill="black"
      />
      <path
        d="M43.96 208.825C44.8 208.825 45.65 208.525 46.31 207.905L69.25 186.875C70.67 185.575 70.76 183.365 69.46 181.955C68.16 180.535 65.95 180.435 64.54 181.745L41.6 202.775C40.18 204.075 40.09 206.285 41.39 207.695C42.08 208.445 43.02 208.825 43.96 208.825Z"
        fill="black"
      />
    </svg>
  );
};

export const FullLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={1325}
    height={222}
    viewBox="0 0 1325 222"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M293.04 173.935C289.76 173.935 287.03 171.205 287.03 167.925V60.785C287.03 52.955 293.41 46.395 301.61 46.395H342.24C369.75 46.395 383.42 64.065 383.42 81.745C383.42 91.405 379.41 101.055 371.39 107.805C384.14 114.185 390.52 126.395 390.52 138.415C390.52 156.275 376.86 173.945 349.34 173.945H293.04V173.935ZM316.18 99.595H338.05C349.16 99.595 354.63 92.485 354.63 85.385C354.63 78.285 349.16 71.355 338.05 71.355H316.18V99.595ZM316.18 148.975H345.15C356.45 148.975 361.91 141.865 361.91 134.765C361.91 127.665 356.45 120.735 345.15 120.735H316.18V148.975Z"
      fill="#5456D1"
    />
    <path
      d="M427.32 136.035C430.23 146.965 438.98 153.895 450.28 153.895C456.66 153.895 462.12 152.805 467.23 149.885C470.69 148.065 473.61 147.155 476.52 147.155C483.08 147.155 487.64 152.075 487.64 157.905C487.64 173.025 461.22 176.305 450.47 176.305C421.5 176.305 401.09 156.265 401.09 127.655C401.09 99.045 420.4 79.005 448.1 79.005C475.8 79.005 493.47 98.135 493.47 123.825C493.47 133.305 486.91 136.035 481.08 136.035H427.32ZM427.32 118.905H468.32C466.5 108.515 458.66 101.595 448.28 101.595C437.9 101.595 430.24 108.155 427.33 118.905H427.32Z"
      fill="#5456D1"
    />
    <path
      d="M604.24 170.105C604.24 172.105 602.42 174.115 600.41 174.115H581.64C579.45 174.115 577.63 172.115 577.63 170.105V164.635C570.34 172.105 560.32 176.295 548.84 176.295C523.7 176.295 505.84 156.075 505.84 127.645C505.84 99.215 523.7 78.995 548.84 78.995C560.5 78.995 570.89 83.365 577.99 90.835C578.36 84.095 584 79.175 590.93 79.175C598.4 79.175 604.23 85.185 604.23 92.295V170.095L604.24 170.105ZM555.22 102.695C541.55 102.695 531.9 112.895 531.9 127.655C531.9 142.415 541.56 152.615 555.22 152.615C568.88 152.615 578.18 142.415 578.18 127.655C578.18 112.895 568.71 102.695 555.22 102.695Z"
      fill="#5456D1"
    />
    <path
      d="M615.71 97.955C612.61 91.215 615.53 83.375 622.45 80.285C624.09 79.555 625.91 79.015 627.73 79.015C632.65 79.015 637.57 82.115 639.94 87.395L661.26 135.495L682.58 87.395C684.77 82.115 689.69 79.015 694.79 79.015C696.61 79.015 698.43 79.565 700.07 80.285C706.99 83.385 709.73 91.215 706.63 97.955L674.2 167.375C672.2 171.935 669.28 173.935 664.72 173.935H657.8C653.24 173.935 650.33 171.935 648.14 167.375L615.71 97.955Z"
      fill="#5456D1"
    />
    <path
      d="M768.03 79.185C774.59 79.185 779.87 84.465 779.87 91.025C779.87 97.585 774.59 102.865 768.03 102.865H763.47C751.08 102.865 744.89 111.065 744.89 122.905V169.915C744.89 172.105 743.07 173.925 741.06 173.925H722.11C720.11 173.925 718.28 172.105 718.28 169.915V121.625C718.28 96.485 734.5 79.175 762.74 79.175H768.02L768.03 79.185Z"
      fill="#5456D1"
    />
    <path
      d="M797.91 173.935C794.63 173.935 791.9 171.205 791.9 167.925V60.785C791.9 52.955 798.28 46.395 806.48 46.395H847.11C874.62 46.395 888.29 64.065 888.29 81.745C888.29 91.405 884.28 101.055 876.26 107.805C889.01 114.185 895.39 126.395 895.39 138.415C895.39 156.275 881.72 173.945 854.21 173.945H797.91V173.935ZM821.05 99.595H842.92C854.04 99.595 859.5 92.485 859.5 85.385C859.5 78.285 854.04 71.355 842.92 71.355H821.05V99.595ZM821.05 148.975H850.02C861.32 148.975 866.78 141.865 866.78 134.765C866.78 127.665 861.31 120.735 850.02 120.735H821.05V148.975Z"
      fill="#5456D1"
    />
    <path
      d="M906.87 92.485C906.87 85.195 912.88 79.185 920.35 79.185C927.82 79.185 933.47 85.195 933.47 92.485V134.215C933.47 145.515 940.94 153.345 951.33 153.345C961.72 153.345 969.19 145.515 969.19 134.215V92.485C969.19 85.195 975.2 79.185 982.49 79.185C989.78 79.185 995.79 85.195 995.79 92.485V134.025C995.79 159.165 977.57 176.845 951.33 176.845C925.09 176.845 906.87 159.175 906.87 134.025V92.485Z"
      fill="#5456D1"
    />
    <path
      d="M1108.57 127.655C1108.57 156.445 1088.34 176.665 1059.56 176.665C1030.78 176.665 1010.18 156.445 1010.18 127.655C1010.18 98.865 1028.4 79.005 1054.09 79.005C1065.2 79.005 1074.68 82.645 1081.97 89.395V56.055C1081.97 48.765 1087.98 42.755 1095.09 42.755C1102.56 42.755 1108.58 48.765 1108.58 56.055V127.665L1108.57 127.655ZM1082.51 127.655C1082.51 112.895 1072.85 102.695 1059.55 102.695C1046.25 102.695 1036.23 112.895 1036.23 127.655C1036.23 142.415 1045.89 152.985 1059.55 152.985C1073.21 152.985 1082.51 142.785 1082.51 127.655Z"
      fill="#5456D1"
    />
    <path
      d="M1221.17 127.655C1221.17 156.445 1200.95 176.665 1172.16 176.665C1143.37 176.665 1122.78 156.445 1122.78 127.655C1122.78 98.865 1141 79.005 1166.69 79.005C1177.81 79.005 1187.28 82.645 1194.57 89.395V56.055C1194.57 48.765 1200.58 42.755 1207.69 42.755C1215.16 42.755 1221.17 48.765 1221.17 56.055V127.665V127.655ZM1195.12 127.655C1195.12 112.895 1185.46 102.695 1172.16 102.695C1158.86 102.695 1148.84 112.895 1148.84 127.655C1148.84 142.415 1158.5 152.985 1172.16 152.985C1185.82 152.985 1195.12 142.785 1195.12 127.655Z"
      fill="#5456D1"
    />
    <path
      d="M1232.46 97.955C1229.36 91.215 1232.28 83.375 1239.2 80.285C1240.84 79.555 1242.66 79.015 1244.48 79.015C1249.4 79.015 1254.32 82.115 1256.69 87.395L1278.01 135.495L1299.33 87.395C1301.52 82.115 1306.43 79.015 1311.54 79.015C1313.36 79.015 1315.18 79.565 1316.82 80.285C1323.74 83.385 1326.48 91.215 1323.38 97.955L1289.12 172.475C1278.73 195.255 1273.45 211.285 1248.31 211.285H1242.3C1235.74 211.285 1230.45 206.185 1230.45 199.625C1230.45 193.065 1235.73 188.145 1242.3 188.145H1246.86C1255.42 188.145 1257.79 182.675 1262.16 172.475L1264.71 167.005L1232.46 97.945V97.955Z"
      fill="#5456D1"
    />
    <path
      d="M231 169.015C231 166.315 228.81 164.115 226.1 164.115C223.39 164.115 221.2 166.305 221.2 169.015C221.2 171.725 223.39 173.915 226.1 173.915C228.81 173.915 231 171.725 231 169.015Z"
      fill="#5456D1"
    />
    <path
      d="M227.1 152.605H219.47C217.99 145.585 211.74 140.295 204.29 140.295C198.93 140.295 194.19 143.035 191.4 147.175C185.57 144.305 180.39 140.435 175.96 135.625C164.72 123.405 148.75 116.395 132.14 116.395C103.12 116.395 79.52 140.005 79.52 169.015C79.52 188.525 90.2 205.585 106.02 214.665H37.41C20.64 214.665 6.98999 201.015 6.98999 184.245C6.98999 183.945 6.99 183.645 7 183.345C7.28 173.705 12.56 165.195 21.13 160.575C29.9 155.855 40.18 156.145 48.61 161.365L70.96 175.195C72.6 176.205 74.75 175.705 75.76 174.065C76.77 172.425 76.27 170.275 74.63 169.265L52.28 155.435C41.7 148.885 28.82 148.515 17.82 154.435C7.03001 160.245 0.369989 170.975 0.019989 183.135C0.00998901 183.505 0 183.865 0 184.235C0 204.855 16.77 221.625 37.39 221.625H126.26C126.68 221.625 127.09 221.545 127.46 221.405C129 221.545 130.55 221.625 132.12 221.625H177.76C177.88 221.625 178 221.625 178.11 221.605C178.16 221.605 178.2 221.595 178.24 221.585C178.31 221.585 178.38 221.565 178.45 221.555C178.5 221.545 178.55 221.525 178.6 221.515C178.66 221.495 178.72 221.485 178.78 221.465C178.83 221.445 178.88 221.425 178.93 221.405C178.99 221.385 179.04 221.365 179.1 221.345C179.15 221.325 179.2 221.295 179.25 221.275C179.3 221.255 179.35 221.225 179.4 221.205C179.45 221.175 179.49 221.145 179.54 221.115C179.59 221.085 179.64 221.055 179.69 221.025C179.73 220.995 179.78 220.965 179.82 220.935C179.87 220.905 179.92 220.865 179.96 220.835C180 220.805 180.04 220.765 180.08 220.735C180.12 220.695 180.17 220.655 180.21 220.615C180.25 220.575 180.28 220.535 180.31 220.505C180.35 220.465 180.39 220.415 180.43 220.375C180.46 220.335 180.49 220.295 180.52 220.255C180.56 220.205 180.6 220.155 180.63 220.105C180.66 220.065 180.68 220.025 180.71 219.975C180.74 219.925 180.78 219.865 180.81 219.815C180.83 219.775 180.85 219.725 180.87 219.685C180.9 219.625 180.93 219.575 180.95 219.515C180.97 219.465 180.99 219.425 181 219.375C181.02 219.315 181.05 219.255 181.06 219.195C181.08 219.145 181.09 219.095 181.1 219.045C181.12 218.985 181.13 218.925 181.15 218.865C181.16 218.815 181.17 218.765 181.17 218.705C181.18 218.645 181.19 218.575 181.2 218.515C181.2 218.465 181.2 218.415 181.2 218.355C181.2 218.295 181.21 218.235 181.21 218.175C181.21 218.155 181.21 218.125 181.21 218.075V182.125C181.21 180.195 179.65 178.635 177.72 178.635C175.79 178.635 174.23 180.195 174.23 182.125V196.995C169.84 190.635 162.4 183.975 149.8 180.715C147.94 180.235 146.03 181.355 145.55 183.215C145.07 185.075 146.19 186.985 148.05 187.465C168.26 192.695 172.87 207.785 173.92 214.655H132.07C106.9 214.655 86.42 194.175 86.42 169.005C86.42 143.835 106.9 123.355 132.07 123.355C146.73 123.355 160.83 129.545 170.76 140.335C175.93 145.955 182 150.445 188.85 153.715C188.76 154.395 188.71 155.095 188.71 155.805C188.71 164.365 195.67 171.325 204.23 171.325C206.15 171.325 207.72 169.765 207.72 167.835C207.72 165.905 206.16 164.345 204.23 164.345C199.52 164.345 195.68 160.515 195.68 155.795C195.68 151.075 199.52 147.245 204.23 147.245C208.94 147.245 212.78 151.075 212.78 155.795C212.78 155.815 212.78 155.825 212.78 155.845C212.78 155.925 212.77 155.995 212.77 156.075C212.77 158.005 214.33 159.565 216.26 159.565H227.04C240.9 159.565 247.11 167.895 248.81 170.715C246.03 183.595 237.19 195.635 224.28 204.145C219.25 201.705 213.65 201.135 208.64 202.665C206.8 203.225 205.76 205.175 206.33 207.015C206.89 208.855 208.84 209.895 210.68 209.325C215.7 207.785 220.89 209.755 224.07 212.115C225.2 212.945 226.08 213.815 226.75 214.655H187.88C185.96 214.655 184.39 216.215 184.39 218.145C184.39 220.075 185.95 221.635 187.88 221.635H231.82C233.74 221.635 235.31 220.075 235.31 218.145C235.31 214.865 233.52 211.345 230.43 208.375C233.83 205.945 236.95 203.285 239.77 200.435L239.93 201.525C240.19 203.235 241.65 204.495 243.38 204.495H247.64C249.38 204.495 250.85 203.215 251.09 201.495L254.78 175.525C255.23 173.955 255.61 172.375 255.91 170.785C256.04 170.075 255.95 169.345 255.65 168.695C255.35 168.035 247.99 152.585 227.05 152.585L227.1 152.605Z"
      fill="#5456D1"
    />
    <path
      d="M242.12 56.705L224.3 47.395V12.475C224.3 10.545 222.74 8.98499 220.81 8.98499H188.07C186.14 8.98499 184.58 10.545 184.58 12.475V26.645L138.68 2.655C131.9 -0.885 124.13 -0.885 117.34 2.655L13.91 56.705C5.46 61.115 0 70.545 0 80.715V146.125C0 147.855 1.16002 149.455 2.86002 149.755C5.06002 150.135 6.97 148.455 6.97 146.325V80.715C6.97 73.105 10.96 66.105 17.13 62.875L120.56 8.82501C125.29 6.35501 130.71 6.35501 135.44 8.82501L186.34 35.425C187.1 35.825 187.98 35.985 188.81 35.795C190.46 35.415 191.54 33.975 191.54 32.385V15.945H217.31V49.495C217.31 50.795 218.03 51.985 219.18 52.585L238.87 62.875C245.04 66.095 249.02 73.095 249.02 80.705V143.845C249.02 145.575 250.18 147.175 251.88 147.475C254.08 147.855 255.99 146.175 255.99 144.045V80.705C255.99 70.525 250.53 61.095 242.09 56.695L242.12 56.705Z"
      fill="#5456D1"
    />
    <path
      d="M49.8 170.175C48.5 168.755 46.29 168.655 44.88 169.965L21.94 190.995C20.52 192.295 20.43 194.505 21.73 195.915C22.42 196.665 23.36 197.045 24.3 197.045C25.14 197.045 25.99 196.745 26.65 196.125L49.59 175.095C51.01 173.795 51.1 171.585 49.8 170.175Z"
      fill="#5456D1"
    />
    <path
      d="M43.96 208.825C44.8 208.825 45.65 208.525 46.31 207.905L69.25 186.875C70.67 185.575 70.76 183.365 69.46 181.955C68.16 180.535 65.95 180.435 64.54 181.745L41.6 202.775C40.18 204.075 40.09 206.285 41.39 207.695C42.08 208.445 43.02 208.825 43.96 208.825Z"
      fill="#5456D1"
    />
  </svg>
);

export const FullLogoWhite = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={361}
    height={61}
    viewBox="0 0 361 61"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M79.8609 47.8717C78.967 47.8717 78.223 47.1203 78.223 46.2175V16.7297C78.223 14.5747 79.9617 12.7692 82.1964 12.7692H93.2691C100.766 12.7692 104.492 17.6324 104.492 22.4985C104.492 25.1571 103.399 27.8131 101.213 29.6709C104.688 31.4268 106.427 34.7873 106.427 38.0956C106.427 43.0111 102.704 47.8744 95.204 47.8744H79.8609V47.8717ZM86.1671 27.4113H92.1272C95.155 27.4113 96.6457 25.4544 96.6457 23.5003C96.6457 21.5462 95.155 19.6388 92.1272 19.6388H86.1671V27.4113ZM86.1671 41.002H94.0621C97.1417 41.002 98.6297 39.0451 98.6297 37.091C98.6297 35.1369 97.1417 33.2296 94.0621 33.2296H86.1671V41.002Z"
      fill="white"
    />
    <path
      d="M116.456 37.4405C117.249 40.4488 119.633 42.3561 122.713 42.3561C124.451 42.3561 125.939 42.0561 127.332 41.2524C128.275 40.7515 129.071 40.5011 129.864 40.5011C131.652 40.5011 132.894 41.8552 132.894 43.4598C132.894 47.6212 125.694 48.5239 122.765 48.5239C114.869 48.5239 109.307 43.0084 109.307 35.1341C109.307 27.2599 114.57 21.7443 122.119 21.7443C129.668 21.7443 134.483 27.0094 134.483 34.08C134.483 36.6892 132.695 37.4405 131.107 37.4405H116.456ZM116.456 32.7259H127.629C127.133 29.8663 124.997 27.9617 122.168 27.9617C119.339 27.9617 117.251 29.7672 116.458 32.7259H116.456Z"
      fill="white"
    />
    <path
      d="M164.671 46.8175C164.671 47.368 164.175 47.9212 163.627 47.9212H158.512C157.915 47.9212 157.419 47.3707 157.419 46.8175V45.312C155.432 47.368 152.701 48.5212 149.573 48.5212C142.722 48.5212 137.854 42.9561 137.854 35.1314C137.854 27.3067 142.722 21.7416 149.573 21.7416C152.75 21.7416 155.582 22.9443 157.517 25.0003C157.618 23.1452 159.155 21.7911 161.043 21.7911C163.079 21.7911 164.668 23.4452 164.668 25.4021V46.8148L164.671 46.8175ZM151.312 28.2645C147.586 28.2645 144.956 31.0718 144.956 35.1341C144.956 39.1965 147.589 42.0038 151.312 42.0038C155.034 42.0038 157.569 39.1965 157.569 35.1341C157.569 31.0718 154.988 28.2645 151.312 28.2645Z"
      fill="white"
    />
    <path
      d="M167.797 26.9599C166.952 25.1049 167.748 22.9471 169.633 22.0966C170.08 21.8957 170.576 21.7471 171.072 21.7471C172.413 21.7471 173.754 22.6003 174.4 24.0535L180.21 37.2919L186.02 24.0535C186.617 22.6003 187.958 21.7471 189.348 21.7471C189.844 21.7471 190.34 21.8985 190.787 22.0966C192.673 22.9498 193.419 25.1049 192.575 26.9599L183.737 46.0662C183.192 47.3212 182.396 47.8717 181.153 47.8717H179.267C178.025 47.8717 177.231 47.3212 176.635 46.0662L167.797 26.9599Z"
      fill="white"
    />
    <path
      d="M209.308 21.7939C211.095 21.7939 212.534 23.2471 212.534 25.0526C212.534 26.8581 211.095 28.3113 209.308 28.3113H208.065C204.688 28.3113 203.001 30.5681 203.001 33.8268V46.7652C203.001 47.368 202.505 47.8689 201.958 47.8689H196.793C196.248 47.8689 195.75 47.368 195.75 46.7652V33.4745C195.75 26.5553 200.17 21.7911 207.866 21.7911H209.305L209.308 21.7939Z"
      fill="white"
    />
    <path
      d="M217.451 47.8717C216.557 47.8717 215.813 47.1203 215.813 46.2175V16.7297C215.813 14.5747 217.552 12.7692 219.786 12.7692H230.859C238.356 12.7692 242.082 17.6324 242.082 22.4985C242.082 25.1571 240.989 27.8131 238.803 29.6709C242.278 31.4268 244.017 34.7873 244.017 38.0956C244.017 43.0111 240.291 47.8744 232.794 47.8744H217.451V47.8717ZM223.757 27.4113H229.717C232.748 27.4113 234.236 25.4544 234.236 23.5003C234.236 21.5462 232.748 19.6388 229.717 19.6388H223.757V27.4113ZM223.757 41.002H231.652C234.732 41.002 236.22 39.0451 236.22 37.091C236.22 35.1369 234.729 33.2296 231.652 33.2296H223.757V41.002Z"
      fill="white"
    />
    <path
      d="M247.145 25.4544C247.145 23.448 248.783 21.7939 250.819 21.7939C252.855 21.7939 254.394 23.448 254.394 25.4544V36.9396C254.394 40.0497 256.43 42.2047 259.262 42.2047C262.093 42.2047 264.129 40.0497 264.129 36.9396V25.4544C264.129 23.448 265.767 21.7939 267.753 21.7939C269.74 21.7939 271.378 23.448 271.378 25.4544V36.8873C271.378 43.8066 266.413 48.6726 259.262 48.6726C252.111 48.6726 247.145 43.8093 247.145 36.8873V25.4544Z"
      fill="white"
    />
    <path
      d="M302.114 35.1341C302.114 43.0579 296.6 48.623 288.757 48.623C280.914 48.623 275.3 43.0579 275.3 35.1341C275.3 27.2103 280.265 21.7443 287.266 21.7443C290.294 21.7443 292.878 22.7462 294.864 24.6039V15.4279C294.864 13.4215 296.502 11.7673 298.44 11.7673C300.476 11.7673 302.116 13.4215 302.116 15.4279V35.1369L302.114 35.1341ZM295.011 35.1341C295.011 31.0718 292.379 28.2645 288.754 28.2645C285.13 28.2645 282.399 31.0718 282.399 35.1341C282.399 39.1965 285.032 42.1056 288.754 42.1056C292.477 42.1056 295.011 39.2983 295.011 35.1341Z"
      fill="white"
    />
    <path
      d="M332.8 35.1341C332.8 43.0579 327.289 48.623 319.443 48.623C311.597 48.623 305.986 43.0579 305.986 35.1341C305.986 27.2103 310.951 21.7443 317.953 21.7443C320.983 21.7443 323.564 22.7462 325.551 24.6039V15.4279C325.551 13.4215 327.189 11.7673 329.126 11.7673C331.162 11.7673 332.8 13.4215 332.8 15.4279V35.1369V35.1341ZM325.701 35.1341C325.701 31.0718 323.068 28.2645 319.443 28.2645C315.819 28.2645 313.088 31.0718 313.088 35.1341C313.088 39.1965 315.721 42.1056 319.443 42.1056C323.166 42.1056 325.701 39.2983 325.701 35.1341Z"
      fill="white"
    />
    <path
      d="M335.877 26.9599C335.032 25.1049 335.828 22.9471 337.713 22.0966C338.16 21.8957 338.656 21.7471 339.152 21.7471C340.493 21.7471 341.834 22.6003 342.48 24.0535L348.29 37.2919L354.1 24.0535C354.697 22.6003 356.035 21.7471 357.428 21.7471C357.924 21.7471 358.42 21.8985 358.867 22.0966C360.753 22.9498 361.5 25.1049 360.655 26.9599L351.318 47.4698C348.486 53.7395 347.047 58.1514 340.196 58.1514H338.558C336.771 58.1514 335.329 56.7477 335.329 54.9422C335.329 53.1368 336.768 51.7826 338.558 51.7826H339.801C342.134 51.7826 342.78 50.2771 343.971 47.4698L344.666 45.9643L335.877 26.9571V26.9599Z"
      fill="white"
    />
    <path
      d="M62.9534 46.5175C62.9534 45.7744 62.3565 45.1689 61.618 45.1689C60.8795 45.1689 60.2826 45.7717 60.2826 46.5175C60.2826 47.2634 60.8795 47.8661 61.618 47.8661C62.3565 47.8661 62.9534 47.2634 62.9534 46.5175Z"
      fill="white"
    />
    <path
      d="M61.8905 42.0011H59.8111C59.4078 40.069 57.7045 38.613 55.6742 38.613C54.2135 38.613 52.9217 39.3671 52.1614 40.5066C50.5725 39.7167 49.1609 38.6515 47.9536 37.3277C44.8904 33.9644 40.5382 32.0351 36.0115 32.0351C28.1028 32.0351 21.6712 38.5332 21.6712 46.5175C21.6712 51.8872 24.5818 56.5826 28.8931 59.0817H10.1952C5.62493 59.0817 1.90495 55.3248 1.90495 50.7092C1.90495 50.6267 1.90495 50.5441 1.90768 50.4615C1.98398 47.8083 3.42292 45.4662 5.75846 44.1946C8.14851 42.8956 10.9501 42.9754 13.2475 44.412L19.3384 48.2184C19.7853 48.4964 20.3713 48.3588 20.6465 47.9074C20.9218 47.4561 20.7855 46.8643 20.3386 46.5863L14.2476 42.78C11.3643 40.9772 7.85418 40.8754 4.8564 42.5047C1.91586 44.1038 0.100831 47.057 0.00544751 50.4038C0.00272226 50.5056 0 50.6047 0 50.7065C0 56.3817 4.57025 60.9972 10.1897 60.9972H34.4091C34.5235 60.9972 34.6353 60.9752 34.7361 60.9367C35.1558 60.9752 35.5782 60.9972 36.0061 60.9972H48.4441C48.4768 60.9972 48.5095 60.9972 48.5395 60.9917C48.5531 60.9917 48.564 60.989 48.5749 60.9862C48.594 60.9862 48.6131 60.9807 48.6322 60.978C48.6458 60.9752 48.6594 60.9697 48.673 60.967C48.6894 60.9615 48.7057 60.9587 48.7221 60.9532C48.7357 60.9477 48.7493 60.9422 48.763 60.9367C48.7793 60.9312 48.7929 60.9257 48.8093 60.9202C48.8229 60.9147 48.8366 60.9064 48.8502 60.9009C48.8638 60.8954 48.8774 60.8872 48.8911 60.8817C48.9047 60.8734 48.9156 60.8651 48.9292 60.8569C48.9428 60.8486 48.9565 60.8404 48.9701 60.8321C48.981 60.8239 48.9946 60.8156 49.0055 60.8073C49.0191 60.7991 49.0328 60.7881 49.0437 60.7798C49.0546 60.7716 49.0655 60.7605 49.0764 60.7523C49.0873 60.7413 49.1009 60.7303 49.1118 60.7193C49.1227 60.7083 49.1309 60.6972 49.1391 60.689C49.15 60.678 49.1609 60.6642 49.1718 60.6532C49.1799 60.6422 49.1881 60.6312 49.1963 60.6202C49.2072 60.6064 49.2181 60.5927 49.2263 60.5789C49.2344 60.5679 49.2399 60.5569 49.2481 60.5431C49.2562 60.5294 49.2671 60.5128 49.2753 60.4991C49.2808 60.4881 49.2862 60.4743 49.2917 60.4633C49.2998 60.4468 49.308 60.433 49.3135 60.4165C49.3189 60.4028 49.3244 60.3917 49.3271 60.378C49.3325 60.3615 49.3407 60.345 49.3434 60.3284C49.3489 60.3147 49.3516 60.3009 49.3544 60.2872C49.3598 60.2706 49.3625 60.2541 49.368 60.2376C49.3707 60.2239 49.3734 60.2101 49.3734 60.1936C49.3762 60.1771 49.3789 60.1578 49.3816 60.1413C49.3816 60.1275 49.3816 60.1138 49.3816 60.0972C49.3816 60.0807 49.3843 60.0642 49.3843 60.0477C49.3843 60.0422 49.3843 60.034 49.3843 60.0202V50.1258C49.3843 49.5946 48.9592 49.1652 48.4332 49.1652C47.9072 49.1652 47.4821 49.5946 47.4821 50.1258V54.2184C46.2857 52.468 44.2581 50.6349 40.8243 49.7377C40.3174 49.6056 39.7969 49.9139 39.6661 50.4258C39.5353 50.9377 39.8405 51.4634 40.3474 51.5955C45.8551 53.0349 47.1115 57.1881 47.3976 59.0789H35.9924C29.133 59.0789 23.5516 53.4423 23.5516 46.5148C23.5516 39.5873 29.133 33.9507 35.9924 33.9507C39.9877 33.9507 43.8303 35.6543 46.5364 38.624C47.9454 40.1708 49.5996 41.4066 51.4664 42.3066C51.4419 42.4937 51.4283 42.6864 51.4283 42.8818C51.4283 45.2377 53.325 47.1533 55.6579 47.1533C56.1811 47.1533 56.609 46.724 56.609 46.1928C56.609 45.6616 56.1838 45.2322 55.6579 45.2322C54.3743 45.2322 53.3278 44.1781 53.3278 42.879C53.3278 41.58 54.3743 40.5258 55.6579 40.5258C56.9415 40.5258 57.988 41.58 57.988 42.879C57.988 42.8845 57.988 42.8873 57.988 42.8928C57.988 42.9148 57.9852 42.9341 57.9852 42.9561C57.9852 43.4873 58.4104 43.9166 58.9363 43.9166H61.8742C65.6514 43.9166 67.3438 46.2093 67.8071 46.9854C67.0494 50.5304 64.6403 53.8441 61.122 56.1863C59.7512 55.5147 58.2251 55.3578 56.8597 55.7789C56.3583 55.9331 56.0748 56.4698 56.2302 56.9762C56.3828 57.4826 56.9142 57.7688 57.4156 57.612C58.7837 57.1881 60.1981 57.7303 61.0648 58.3798C61.3727 58.6083 61.6126 58.8477 61.7951 59.0789H51.2021C50.6788 59.0789 50.251 59.5083 50.251 60.0395C50.251 60.5706 50.6761 61 51.2021 61H63.1768C63.7001 61 64.128 60.5706 64.128 60.0395C64.128 59.1367 63.6401 58.1679 62.798 57.3505C63.7246 56.6817 64.5749 55.9496 65.3434 55.1652L65.387 55.4652C65.4579 55.9358 65.8558 56.2826 66.3272 56.2826H67.4882C67.9624 56.2826 68.363 55.9303 68.4284 55.4569L69.434 48.3093C69.5567 47.8772 69.6602 47.4423 69.742 47.0047C69.7774 46.8093 69.7529 46.6084 69.6711 46.4295C69.5894 46.2478 67.5836 41.9956 61.8769 41.9956L61.8905 42.0011Z"
      fill="white"
    />
    <path
      d="M65.9839 15.6068L61.1275 13.0444V3.43346C61.1275 2.90227 60.7023 2.47291 60.1763 2.47291H51.2539C50.7279 2.47291 50.3027 2.90227 50.3027 3.43346V7.33343L37.7938 0.730728C35.9461 -0.243576 33.8286 -0.243576 31.9781 0.730728L3.79083 15.6068C1.48799 16.8205 0 19.4159 0 22.215V40.2176C0 40.6937 0.316134 41.1341 0.779427 41.2167C1.37898 41.3212 1.8995 40.8589 1.8995 40.2726V22.215C1.8995 20.1205 2.98688 18.1939 4.66836 17.3049L32.8557 2.42888C34.1447 1.74907 35.6218 1.74907 36.9108 2.42888L50.7824 9.74992C50.9895 9.86001 51.2293 9.90405 51.4555 9.85176C51.9052 9.74717 52.1995 9.35085 52.1995 8.91324V4.3885H59.2225V13.6224C59.2225 13.9802 59.4187 14.3077 59.7321 14.4728L65.0981 17.3049C66.7796 18.1911 67.8643 20.1177 67.8643 22.2122V39.5901C67.8643 40.0662 68.1804 40.5066 68.6437 40.5891C69.2432 40.6937 69.7638 40.2313 69.7638 39.6451V22.2122C69.7638 19.4104 68.2758 16.815 65.9757 15.604L65.9839 15.6068Z"
      fill="white"
    />
    <path
      d="M13.5718 46.8368C13.2175 46.446 12.6152 46.4185 12.2309 46.779L5.97921 52.567C5.59223 52.9248 5.5677 53.5331 5.92198 53.9211C6.11003 54.1276 6.36619 54.2322 6.62237 54.2322C6.85129 54.2322 7.08294 54.1496 7.2628 53.9789L13.5145 48.1909C13.9015 47.8331 13.926 47.2249 13.5718 46.8368Z"
      fill="white"
    />
    <path
      d="M11.9802 57.4743C12.2091 57.4743 12.4408 57.3918 12.6207 57.2211L18.8724 51.4331C19.2594 51.0753 19.2839 50.4671 18.9296 50.079C18.5753 49.6882 17.9731 49.6606 17.5888 50.0212L11.3371 55.8092C10.9501 56.167 10.9256 56.7753 11.2798 57.1633C11.4679 57.3697 11.724 57.4743 11.9802 57.4743Z"
      fill="white"
    />
  </svg>
);

export const BiteOne = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={198}
    height={76}
    viewBox="0 0 198 76"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M164.922 46.0982C185.151 42.3044 199.693 29.328 197.402 17.1146C195.112 4.90109 176.856 -1.92447 156.627 1.86925C145.597 3.93798 136.257 8.73721 130.416 14.6543C125.391 6.65833 114.938 2.20526 104.012 4.2545C94.3902 6.05893 86.9385 12.4289 84.0758 20.2561C76.9327 11.1111 65.2181 4.28573 51.3201 2.33249C26.4357 -1.16478 3.97469 12.282 1.15197 32.3667C-1.67075 52.4514 16.2138 71.5683 41.0982 75.0656C65.9826 78.5629 88.4436 65.1161 91.2664 45.0314C91.3157 44.6806 91.3586 44.3302 91.3954 43.98C96.9134 48.0872 104.488 49.9496 112.306 48.4834C119.115 47.2066 124.837 43.6436 128.615 38.8959C135.655 45.8078 149.732 48.9469 164.922 46.0982Z"
      fill="white"
    />
  </svg>
);

export const BiteTwo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={297}
    height={119}
    viewBox="0 0 297 119"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M256.337 74.0654C247.588 75.2951 239.138 74.43 231.736 71.9183C231.997 75.3773 231.817 78.8999 231.155 82.4313C226.542 107.029 200.25 122.739 172.431 117.522C156.242 114.486 143.104 105.033 135.856 92.8121C121.052 100.289 95.8759 102.45 68.4972 97.3151C27.3535 89.5989 -3.18449 68.3305 0.288748 49.8107C3.76195 31.291 39.9311 22.533 81.0749 30.2492C103.15 34.3892 122.173 42.4308 134.527 51.8559C143.98 34.2161 166.031 24.1136 189.136 28.4468C195.376 29.617 201.163 31.7408 206.334 34.609C209.194 18.277 225.177 4.27509 246.115 1.33233C271 -2.16494 293.461 11.2818 296.284 31.3665C299.106 51.4512 281.222 70.5682 256.337 74.0654Z"
      fill="white"
    />
  </svg>
);
