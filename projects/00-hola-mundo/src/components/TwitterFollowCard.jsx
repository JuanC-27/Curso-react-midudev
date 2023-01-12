import { useState } from "react";
// Los Hooks (Ganchos) permiten añadir funcionalidad a los componentes
// de react que se ejecutan una vez que ocurre cierta transición.
 
export default function TwitterFollowCard({children,formatUserName, userName, initialIsFollowing}) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  
  const textButton = isFollowing ? 'Siguiendo' : 'Seguir';
  const buttonClassName = isFollowing 
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'
  
  return (
      <article className="tw-followCard">
        <header className="tw-followCard-header">
          <img className="tw-followCard-image" src={`https://unavatar.io/${userName}`} alt={`avatar de ${userName}`} />
          <div>
            <strong className="tw-followCard-name">{children}</strong>
            <span className="tw-followCard-username">{formatUserName(userName)}</span>
          </div>
        </header>
  
        <aside>
          <button onClick={()=> setIsFollowing(!isFollowing)} className={buttonClassName}>
            <span className="tw-followCard-button-text">{textButton}</span>
            <span className="tw-followCard-button-unfollowing">Dejar de seguir</span>
          </button>
        </aside>
  
      </article>
    )
  }