import { useState, useEffect } from 'react';
import './CollapsibleComp.css'
import { 
    CloseTitleContainer,
    IconContainer,
    OpenCloseIcon,
    TitleContainer,
    Title,
    Description,
} from './CollapsibleCompStyle';
import Collapsible from "react-collapsible";
import 'boxicons'

function CloseTitle ({label, description, isOpen}) {
    return (
        <CloseTitleContainer>
            <IconContainer>
                <OpenCloseIcon background={isOpen}>
                    {
                        isOpen ? <i class='bx bxs-chevron-up'></i> : <i class='bx bxs-chevron-down' ></i>
                    }
                
                </OpenCloseIcon>
            </IconContainer>

            <TitleContainer>
                <Title>{label}</Title>
                <Description>{description}</Description>
            </TitleContainer>
        </CloseTitleContainer>
    )
}


export default function CallapsiableComp({label, description, children}){
    const [isOpen, setIsOpen] = useState(false)
    useEffect(() => console.log('isOpen Changed to', isOpen), [isOpen])
    return (
        <Collapsible 
            trigger={<CloseTitle label={label} description={description} isOpen={isOpen}/>}
            transitionTime='250'
            onOpen={() => setIsOpen(!isOpen)}
            onClose={() => setIsOpen(!isOpen)}
        >
          {children}
        </Collapsible>
      );
}












// import React, { useState, useRef, useEffect } from "react";
// import 'boxicons'


// const Collapsible = ({ open, children, title }) => {
//   const [isOpen, setIsOpen] = useState(open);

//   const handleFilterOpening = () => {
//     setIsOpen((prev) => !prev);
//   };

//   const ref = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (isOpen) setHeight(ref.current?.getBoundingClientRect().height);
//     else setHeight(0);
//   }, [isOpen]);

//   return (
//     <>
//       <div className="card">
//         <div>
//           <div className="p-3 border-bottom d-flex justify-content-between">
//             <h6 className="font-weight-bold">{title}</h6>
//             <button type="button" className="btn" onClick={handleFilterOpening}>
//               {!isOpen ? (
//                 <i class='bx bxs-chevron-down' ></i>
//               ) : (
//                 <i class='bx bxs-chevron-up'></i>
//               )}
//             </button>
//           </div>
//         </div>

//         <div className="border-bottom">
//           <div>{isOpen && <div className="p-3">{children}</div>}</div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Collapsible;