import { Header, Main, Modal } from './components';

export default function Notes() {
  return (
    <div className="relative flex w-full h-full border-2 justify-center items-center border-blue-500 p-6">
      <div className="border-2 border-gray-600 flex flex-col h-1/2 w-1/3 rounded-md overflow-hidden p-3">
        <Header />
        <Main />
      </div>
      <Modal />
    </div>
  );
}
