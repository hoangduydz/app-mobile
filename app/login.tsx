import { MaterialIcons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router'; // Đã thêm Stack vào đây
import React, { useState } from 'react';
import { Image, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
// 1 DẤU CHẤM: Tìm ngay file bên cạnh
import { globalUser } from './mockDB';

export default function LoginScreen() {
  const router = useRouter();

  const [mssv, setMssv] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const teamDB: Record<string, string> = {
    '240464': 'Lương Công Hoàng Duy',
    '240289': 'Giáp Quốc Vin',
    '240450': 'Trần Đức Việt',
    '240164': 'Đỗ Minh Thiện',
    '240288': 'Nguyễn Quốc Thái',
    '240142': 'Bùi Trần Thanh Quang',
    '240192': 'Phạm Đỗ Nhật Tri'
  };

  const handleLogin = () => {
    setErrorMessage('');

    if (mssv.trim() === '' || password.trim() === '') {
      setErrorMessage('Vui lòng nhập đầy đủ Mã sinh viên và Mật khẩu.');
      return;
    }

    const userName = teamDB[mssv];

    if (userName && password === '123456') {
      globalUser.mssv = mssv;
      globalUser.name = userName;
      globalUser.isLoggedIn = true;
      router.replace('/');
    } else {
      setErrorMessage('Mã sinh viên hoặc mật khẩu không chính xác.');
    }
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className="flex-1 bg-[#f9f9f9]">
      
      {/* Đã thêm dòng này để giấu đi cái thanh header chữ "login" ở trên cùng */}
      <Stack.Screen options={{ headerShown: false }} />

      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} className="px-6 py-12" showsVerticalScrollIndicator={false}>
        
        <View className="items-center mb-8">
          <Image source={{ uri: 'https://tse4.mm.bing.net/th/id/OIP.sYub1wIWIHQfK6LeKRUvkQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3' }} className="w-20 h-20 rounded-full" resizeMode="contain" />
        </View>

        <View className="mb-10 text-center">
          <Text className="text-2xl font-extrabold text-[#000666] tracking-tight mb-2 text-center">Đăng nhập vào tài khoản</Text>
          <Text className="text-[#454652] font-medium text-sm text-center">Hệ thống quản lý học thuật TBD</Text>
        </View>

        <View className="space-y-6">
          <View className="space-y-2 mb-4">
            <Text className="text-xs font-bold uppercase tracking-wider text-[#454652] ml-1 mb-2">Mã sinh viên</Text>
            <View className="relative justify-center">
              <View className="absolute left-4 z-10"><MaterialIcons name="person" size={20} color={mssv ? "#000666" : "#767683"} /></View>
              
              {/* ĐÃ SỬA THÀNH CHỮ MỜ "Nhập mã sinh viên" VÀ THÊM MÀU XÁM */}
              <TextInput 
                className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-xl text-[#1a1c1c] font-medium" 
                placeholder="Nhập mã sinh viên" 
                placeholderTextColor="#a0a0ab"
                keyboardType="numeric" 
                value={mssv} 
                onChangeText={setMssv} 
              />
            
            </View>
          </View>

          <View className="space-y-2 mb-2">
            <Text className="text-xs font-bold uppercase tracking-wider text-[#454652] ml-1 mb-2">Mật khẩu</Text>
            <View className="relative justify-center">
              <View className="absolute left-4 z-10"><MaterialIcons name="lock" size={20} color={password ? "#000666" : "#767683"} /></View>
              
              {/* THÊM MÀU XÁM CHO DẤU CHẤM MẬT KHẨU */}
              <TextInput 
                className="w-full pl-12 pr-12 py-4 bg-white border border-slate-200 rounded-xl text-[#1a1c1c] font-medium" 
                placeholder="••••••••" 
                placeholderTextColor="#a0a0ab"
                secureTextEntry={!isPasswordVisible} 
                value={password} 
                onChangeText={setPassword} 
              />
              
              <TouchableOpacity className="absolute right-4 z-10 p-2" onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                <MaterialIcons name={isPasswordVisible ? "visibility" : "visibility-off"} size={20} color="#767683" />
              </TouchableOpacity>
            </View>
          </View>

          {errorMessage !== '' && (
            <View className="bg-[#ffdad6] p-3 rounded-xl border border-red-200 mt-2"><Text className="text-[#ba1a1a] text-sm font-medium text-center">{errorMessage}</Text></View>
          )}

          <View className="pt-6 pb-8">
            <TouchableOpacity onPress={handleLogin} className="w-full py-4 bg-[#000666] rounded-full shadow-lg items-center active:scale-95">
              <Text className="text-white font-bold text-lg">Đăng nhập</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}