import { MaterialIcons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, ImageBackground, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { globalUser } from './mockDB';

export default function LoginScreen() {
  const router = useRouter();

  const [mssv, setMssv] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    setErrorMessage('');

    if (mssv.trim() === '' || password.trim() === '') {
      setErrorMessage('Vui lòng nhập đầy đủ Mã sinh viên và Mật khẩu.');
      return;
    }

    try {
      // ⚠️ THAY THẾ DÒNG NÀY BẰNG URL API THỰC TẾ TỪ BACKEND
      const apiUrl = 'http://YOUR_LOCAL_IP:5000/api/auth/login'; 
      
      // Đoạn code dưới đây sẽ được mở ra khi Backend đã sẵn sàng
      /* const response = await axios.post(apiUrl, {
        studentId: mssv,
        password: password
      });

      if (response.data.isSuccess) {
        globalUser.mssv = mssv;
        globalUser.name = response.data.fullName; 
        globalUser.isLoggedIn = true;
        router.replace('/');
      } else {
        setErrorMessage('Mã sinh viên hoặc mật khẩu không chính xác.');
      }
      */

      // CODE TẠM THỜI (Để test UI trước khi có Backend)
      if (password === '123456') {
        globalUser.mssv = mssv;
        globalUser.name = "Sinh Viên Test"; // Tên tạm
        globalUser.isLoggedIn = true;
        router.replace('/');
      } else {
        setErrorMessage('Mã sinh viên hoặc mật khẩu không chính xác.');
      }

    } catch (error) {
      setErrorMessage('Không thể kết nối đến Máy chủ (Server).');
      console.error(error);
    }
  };

  return (
    <View className="flex-1">
      <Stack.Screen options={{ headerShown: false }} />
      
      {/* Nền ảnh tòa nhà đại học */}
      <ImageBackground 
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR07k6X8qL_6B6U6zZ2L6E6zZ2L6E6zZ2L6E6zZ2L6E&s' }} 
        className="flex-1"
        resizeMode="cover"
      >
        <View className="flex-1 bg-black/30"> 
          <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
            className="flex-1"
          >
            <ScrollView 
              contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} 
              className="px-6 py-12" 
              showsVerticalScrollIndicator={false}
            >
              
              <View className="bg-white rounded-3xl p-8 shadow-2xl">
                
                <View className="items-center mb-6">
                  <Image source={{ uri: 'https://tse4.mm.bing.net/th/id/OIP.sYub1wIWIHQfK6LeKRUvkQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3' }} className="w-16 h-16 rounded-full" resizeMode="contain" />
                </View>

                <View className="mb-8 items-center">
                  <Text className="text-xl font-extrabold text-[#000666] tracking-tight mb-1">Đăng nhập tài khoản</Text>
                  <Text className="text-[#454652] font-medium text-xs text-center">Chào mừng bạn quay trở lại với cổng thông tin học thuật TBD</Text>
                </View>

                <View className="space-y-4">
                  <View>
                    <Text className="text-[10px] font-bold uppercase tracking-wider text-[#454652] mb-2 ml-1">Mã sinh viên</Text>
                    <View className="relative justify-center">
                      <View className="absolute left-4 z-10"><MaterialIcons name="person" size={18} color={mssv ? "#000666" : "#a0a0ab"} /></View>
                      <TextInput 
                        className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-100 rounded-xl text-[#1a1c1c] font-medium" 
                        placeholder="Nhập mã sinh viên hoặc ID" 
                        placeholderTextColor="#a0a0ab"
                        keyboardType="numeric" 
                        value={mssv} 
                        onChangeText={setMssv} 
                      />
                    </View>
                  </View>

                  <View className="mt-4">
                    <Text className="text-[10px] font-bold uppercase tracking-wider text-[#454652] mb-2 ml-1">Mật khẩu</Text>
                    <View className="relative justify-center">
                      <View className="absolute left-4 z-10"><MaterialIcons name="lock" size={18} color={password ? "#000666" : "#a0a0ab"} /></View>
                      <TextInput 
                        className="w-full pl-11 pr-12 py-3.5 bg-slate-50 border border-slate-100 rounded-xl text-[#1a1c1c] font-medium" 
                        placeholder="••••••••" 
                        placeholderTextColor="#a0a0ab"
                        secureTextEntry={!isPasswordVisible} 
                        value={password} 
                        onChangeText={setPassword} 
                      />
                      <TouchableOpacity className="absolute right-4 z-10 p-1" onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                        <MaterialIcons name={isPasswordVisible ? "visibility" : "visibility-off"} size={18} color="#767683" />
                      </TouchableOpacity>
                    </View>
                  </View>

                  {errorMessage !== '' && (
                    <View className="bg-[#ffdad6] p-3 rounded-xl border border-red-100 mt-4">
                      <Text className="text-[#ba1a1a] text-xs font-medium text-center">{errorMessage}</Text>
                    </View>
                  )}

                  <TouchableOpacity onPress={handleLogin} className="w-full py-4 bg-[#000666] rounded-xl shadow-lg items-center mt-6 active:scale-[0.98]">
                    <Text className="text-white font-bold text-base">Đăng nhập</Text>
                  </TouchableOpacity>

                  <TouchableOpacity className="w-full py-3.5 bg-white border border-slate-200 rounded-xl flex-row items-center justify-center mt-4 active:bg-slate-50">
                    <Image source={{ uri: 'https://www.gstatic.com/images/branding/product/1x/gmail_512dp.png' }} className="w-5 h-5 mr-2" />
                    <Text className="text-[#454652] font-bold text-sm">Kết nối dùng Email TBD</Text>
                  </TouchableOpacity>

                </View>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </ImageBackground>
    </View>
  );
}