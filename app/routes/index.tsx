import * as React from "react";
import Snow from "../components/snow.client.tsx";
import { ClientOnly } from "remix-utils";
import Audio from "../components/audio.client.tsx";

const DISCORD_LINK_APP = 'discord://discord.com/invite/THzhSx3Meh';
const DISCORD_LINK_WEB = 'https://discord.gg/THzhSx3Meh';

export default function Index() {
  const snowRef = React.useRef<HTMLDivElement>(null);
  const [discordLink, setDiscordLink] = React.useState<string>('')
  React.useEffect(() => {
    if(discordLink !== '') {
      return;
    }
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    document.body.appendChild(iframe);
    iframe.setAttribute('src', DISCORD_LINK_APP); 

    try {
        setDiscordLink(iframe.contentDocument ? DISCORD_LINK_APP : DISCORD_LINK_WEB);
    } catch (e) {
        setDiscordLink(DISCORD_LINK_WEB);
    }

    document.body.removeChild(iframe);
  }, [discordLink])

  return (
    <div className="relative w-screen h-screen bg-lichking flex justify-center items-center bg-cover bg-center bg-no-repeat bg-gradient-to-b">
      <div className="absolute top-2 left-2 z-20">
        <ClientOnly fallback={null}>
          {() => <Audio/>}
        </ClientOnly>
      </div>
      <div className="z-10 absolute top-0 left-0 overflow-hidden" ref={snowRef}>
        <ClientOnly fallback={null}>
          {() => <Snow/>}
        </ClientOnly>
      </div>
      <div className="z-20 flex flex-col justify-center items-center">
        <h1 className='font-title font-black text-6xl md:text-9xl animate-pulse-ts text-shadow-blue'>Potentia</h1>
        <p className="mt-8 text-xl md:text-3xl text-center text-slate-300">
          "Coming together is a beginning. Keeping together is progress. Working together is success."
        </p>
        <p className="mt-8 md:text-xl text-slate-300"><span>EU</span> ● <span>Earthshaker</span> ● <span>Alliance</span></p>
        <a href={discordLink} target="_blank" className="mt-10 rounded px-4 md:px-6 py-2 md:py-3 bg-discord-purple text-slate-300 flex items-center md:text-xl">
          <img src="/discord-50.png" alt="discord icon" className='w-6 mr-4 md:w-8 invert'/>
          Apply today
        </a>
      </div>
    </div>
  );
}
