import { MdOutlineSpeakerNotes } from 'react-icons/md';

export default function Header() {
  return (
    <div className="w-full p-2 flex flex-col items-center gap-1">
      <span className="font-bold text-2xl">Notes</span>
      <MdOutlineSpeakerNotes size={40} />
    </div>
  );
}
