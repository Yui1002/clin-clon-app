// import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
// import React, {useEffect, useState} from 'react';

// const ListUser = () => {
//   return (
//     <View>
//       <Text style={styles.title}>List User</Text>
//       {users.length < 1 ? (
//         <View>
//           <Text>No user found</Text>
//         </View>
//       ) : (
//         <View style={styles.list_user_container}>
//           <View style={styles.list_user_previewContainer}>
//             <View style={styles.list_user_headerBox}>
//               <Text style={styles.list_user_box_text}>first name</Text>
//             </View>
//             <View style={styles.list_user_headerBox}>
//               <Text style={styles.list_user_box_text}>last name</Text>
//             </View>
//             <View style={styles.list_user_headerBox}>
//               <Text style={styles.list_user_box_text}>username</Text>
//             </View>
//             <View style={[styles.list_user_headerBox, {flexBasis: 2}]}>
//               <Text style={styles.list_user_box_text}>rate</Text>
//             </View>
//             <View style={styles.list_user_headerBox}>
//               <Text style={styles.list_user_box_text}>rate type</Text>
//             </View>
//             <View style={styles.list_user_headerBox}>
//               <Text style={styles.list_user_box_text}>status</Text>
//             </View>
//           </View>
//           <View>
//             {users.map(user => (
//               <View style={styles.list_user_previewContainer}>
//                 <View style={styles.list_user_box}>
//                   <Text style={styles.list_user_box_text}>
//                     {user.first_name}
//                   </Text>
//                 </View>
//                 <View style={styles.list_user_box}>
//                   <Text style={styles.list_user_box_text}>
//                     {user.last_name}
//                   </Text>
//                 </View>
//                 <View style={styles.list_user_box}>
//                   <Text style={styles.list_user_box_text}>
//                     {user.user_name}
//                   </Text>
//                 </View>
//                 <View style={[styles.list_user_box, {flexBasis: 2}]}>
//                   <Text style={styles.list_user_box_text}>{user.rate}</Text>
//                 </View>
//                 <View style={styles.list_user_box}>
//                   <Text style={styles.list_user_box_text}>
//                     {user.rate_type}
//                   </Text>
//                 </View>
//                 <View style={styles.list_user_box}>
//                   <Text style={styles.list_user_box_text}>{user.status}</Text>
//                 </View>
//               </View>
//             ))}
//           </View>
//         </View>
//       )}
//     </View>
//   );
// };

// export default ListUser;
