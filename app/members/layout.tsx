
import Link from 'next/link';
import type { ReactNode } from 'react'; 
type Prop = {
  children : ReactNode,
  membermodal : ReactNode
}
const MembersLayout = ({ children, membermodal } : Prop) => {
  return (
    <>
      {children}
      {membermodal}
    </>
    
  )
}

export default MembersLayout