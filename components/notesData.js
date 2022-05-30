import AsyncStorage from "@react-native-community/async-storage";
export const notes = [];
// const getItem = async ()=> {
//     return await AsyncStorage.getItem('notes')
//         .then((result) => {
//             if (result) {
//                 try {
//                     result = JSON.parse(result);
//                     console.log(result+"h.");
//                     notes = result;
//                 } catch (e) {
//                     console.log('AsyncStorage#getItem error deserializing JSON for key: ' + key, e.message);
//                 }
//             }
//             return result;
//         });
// }
// getItem();
// export default notes;