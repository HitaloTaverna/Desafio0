import { View } from "react-native";

export const Desafio01 =()=> {
    return (
      <View style= {{flex: 1}} >
                  {/* retângulo superio */}
          <View style={{flex: 0.6,justifyContent: 'flex-start'}}>
              <View style={{width:'100%', height: 25, backgroundColor: "#50E3C2" }}/>
          </View>
                  {/* 1° Quadrado */}
          <View style= {{flex: 1.4, alignItems: 'center'}}>
            <View style= {{ width:100,height: 100, backgroundColor:"#F5A623"}}/> 
         </View>

          <View style={{flex:3}}>
                  {/* Todos os quadrados */}
              <View style = {{flex:1, justifyContent: "space-around", alignItems: "center", flexDirection: "row"}}/>
                <View style= {{width: 100, height: 100, backgroundColor: "#F5A623"}}/>
                <View style= {{width: 100, height: 100, backgroundColor: "#F5A623"}}/>
                <View style= {{width: 100, height: 100, backgroundColor: "#F5A623"}}/>
          <View style = {{flex:1, justifyContent: "space-around", alignItems: "center", flexDirection: "row"}}>
              <View style= {{width: 100, height: 100, backgroundColor: "#F5A623"}}/>
              <View style= {{width: 100, height: 100, backgroundColor: "#F5A623"}}/>
              <View style= {{width: 100, height: 100, backgroundColor: "#F5A623"}}/>
          </View>
                   {/* 1° retângulo */}
      <View style= {{flex: 0.7, alignItems: 'center'}}>
            <View style= {{width:140,height: 30, backgroundColor:"#F5A623" }}/> 
         </View>
                   {/* 2° retângulo */}
         <View style= {{flex:1}}>
            <View style= {{flexDirection: "row"}}>
               <View style= {{flex: 1, height: 78, backgroundColor:"#9013FE"}}/> 
               <View style= {{flex: 1, height: 78, backgroundColor:"#9013FE"}}/> 
            </View>
            <View style= {{height: 13, backgroundColor:"#50E3C2"}}/> 
         </View>
                 {/* 3° retângulo */}
         <View style= {{flex: 0.75, justifyContent:'flex-end'}}>
            <View style= {{width: '100%', height: 60, backgroundColor:"#4A90E2" }}/> 
         </View>

      </View>
          

         

      </View>
      
    );
  }