import {
  IonHeader,
  IonIcon,
  IonRippleEffect,
  IonToolbar,
  useIonRouter,
} from '@ionic/react';
import Image from 'next/image';
import logo from '../../public/logo1.svg';
import logoTitle from '../../public/logo-title.svg';

const Header = () => {
  const router = useIonRouter();

  const handleRouter = () => {
    if (router.routeInfo.pathname === '/settings') {
      router.goBack();
    } else {
      router.push('/settings');
    }
  };

  const handleLogo = () => {
    router.push('/home');
  };
  return (
    <IonHeader>
      <IonToolbar>
        <div
          className="flex items-center justify-start px-3 cursor-pointer"
          slot="start"
          onClick={handleLogo}
        >
          <Image
            priority={true}
            src={logo}
            alt="logo"
            className="rotate mr-2 w-[30px] h-[30px]"
          />
          <Image
            priority={true}
            src={logoTitle}
            alt="logo-title"
            className="w-[100px] h-[16.27px]"
          />
        </div>
        <div
          onClick={handleRouter}
          slot="end"
          className="h-full flex justify-center items-center cursor-pointer w-10 ion-activatable relative text-[#ff5555]"
        >
          {router.routeInfo.pathname === '/settings' ? (
            <CloseIcon />
          ) : (
            <SettingsIcon />
          )}
          <IonRippleEffect className="opacity-50" />
        </div>
      </IonToolbar>
    </IonHeader>
  );
};
export default Header;

const SettingsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.5em"
    height="1.5em"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M11.112 21.05c-.677 0-1.195-.413-1.353-1.064l-.387-1.643-.281-.097-1.424.879c-.571.36-1.24.273-1.723-.21l-1.221-1.223c-.484-.483-.58-1.151-.211-1.713l.887-1.424-.096-.264-1.644-.387a1.359 1.359 0 0 1-1.063-1.353v-1.74a1.35 1.35 0 0 1 1.063-1.354l1.626-.395.106-.282-.888-1.424c-.37-.562-.273-1.221.21-1.713l1.223-1.23c.474-.476 1.142-.563 1.713-.212l1.424.88.3-.115.386-1.644c.158-.65.676-1.063 1.353-1.063h1.776c.677 0 1.195.413 1.353 1.063l.378 1.644.299.114 1.433-.879c.57-.351 1.23-.263 1.705.211l1.23 1.23c.483.493.571 1.152.211 1.714l-.896 1.424.114.282 1.626.395a1.35 1.35 0 0 1 1.063 1.353v1.74c0 .669-.422 1.196-1.063 1.354l-1.644.387-.105.264.896 1.424c.36.562.273 1.23-.21 1.713l-1.231 1.222c-.483.483-1.143.571-1.714.211l-1.433-.879-.28.097-.379 1.643c-.158.65-.676 1.064-1.353 1.064h-1.776Zm.14-1.371h1.495c.15 0 .229-.062.246-.202l.536-2.18a4.905 4.905 0 0 0 1.406-.58l1.917 1.178c.114.079.22.061.334-.044l1.028-1.037c.105-.097.105-.203.035-.326l-1.178-1.898a6 6 0 0 0 .572-1.406l2.188-.519c.132-.026.202-.105.202-.255v-1.468c0-.158-.061-.228-.202-.255l-2.18-.527c-.14-.571-.395-1.09-.562-1.415l1.169-1.898c.079-.132.079-.238-.027-.343l-1.037-1.02c-.114-.105-.202-.123-.342-.044L14.944 6.6a6.41 6.41 0 0 0-1.415-.57l-.536-2.198c-.017-.14-.097-.202-.246-.202h-1.494c-.15 0-.229.061-.255.202l-.518 2.18c-.528.15-1.064.369-1.442.58L7.14 5.44c-.132-.079-.229-.061-.334.044L5.76 6.504c-.097.105-.106.21-.027.343l1.17 1.898c-.159.325-.423.844-.563 1.415l-2.171.527c-.15.027-.202.097-.202.255v1.468c0 .15.061.229.202.255l2.18.519c.14.536.369 1.037.57 1.406l-1.177 1.898c-.07.123-.061.229.035.326l1.037 1.037c.106.105.22.123.326.044l1.916-1.178c.378.237.879.448 1.415.58l.527 2.18c.026.14.106.202.255.202ZM12 15.012a3.374 3.374 0 0 1-3.357-3.358c0-1.828 1.52-3.34 3.357-3.34 1.837 0 3.349 1.512 3.349 3.34 0 1.846-1.512 3.358-3.349 3.358Zm0-1.363c1.072 0 1.969-.905 1.969-1.995A1.99 1.99 0 0 0 12 9.677c-1.09 0-1.986.896-1.986 1.977 0 1.099.896 1.995 1.986 1.995Z"></path>
  </svg>
);

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.5em"
    height="1.5em"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      fill-rule="evenodd"
      d="M5.636 16.95a1 1 0 0 0 1.414 1.414l4.95-4.95 4.95 4.95a1 1 0 0 0 1.414-1.414L13.414 12l4.95-4.95a1 1 0 0 0-1.414-1.414L12 10.586l-4.95-4.95A1 1 0 1 0 5.636 7.05l4.95 4.95-4.95 4.95Z"
      clip-rule="evenodd"
    ></path>
  </svg>
);
