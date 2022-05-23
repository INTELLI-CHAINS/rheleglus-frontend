import 'assets/styles/sections/projectVideo.scss'

const Utilities = () => {
   const url = 'https://player.vimeo.com/video/704447511?h=97f588e169&autoplay=0&color=e50914&title=0&byline=0&portrait=0'

   return (
      <section className={`projectVideo no-banner`} id='utilities'>
         <div className='projectVideo__container container'>
            <h2 className='projectVideo__title'>RoR NFT Utilities</h2>
            <div className='projectVideo__video-wrapper'>
               <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                  <iframe
                     src={url}
                     style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                     frameBorder='0'
                     allowFullScreen
                     allow='fullscreen; picture-in-picture'
                     title='Rise of Rhelegus'
                  ></iframe>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Utilities
