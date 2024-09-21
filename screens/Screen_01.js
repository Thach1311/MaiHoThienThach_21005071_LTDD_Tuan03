
import { Image } from 'react-native'
function Screen_01 (){

    return (
        <>
           <h1 style={{fontSize:'30px', color:'#09d44c', fontWeight:'300', display:'flex', justifyContent:'center'}}>Order your favorite!</h1>
           <Image source={require('../Data/Image_96.png')} style={{marginLeft:'215px'}}></Image>
           <Image source={require('../Data/Image_95.png')}></Image>
           <Image source={require('../Data/Image 97.png')}  style={{marginLeft:'200px'}} ></Image>
           <div style={{display:'flex',justifyContent:'center',marginTop:'30px'}}>
              <button style={{backgroundColor:'#09d44c',borderRadius:'15px',width:'150px',height:'30px',color:'#fff',border:'none' }}>Get Started</button>
           </div>
        </>
    )
}
export default Screen_01



