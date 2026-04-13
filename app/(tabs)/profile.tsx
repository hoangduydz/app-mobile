import { MaterialIcons } from '@expo/vector-icons';
import { useFocusEffect, useRouter } from 'expo-router';
import React, { useCallback, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { globalUser } from '../mockDB';

export default function ProfileScreen() {
  const router = useRouter();

  const [userData, setUserData] = useState({ name: '', mssv: '' });
  const [studentInfo, setStudentInfo] = useState({ className: '', major: '' });

  const getStudentDetails = (mssv: string) => {
    if (mssv === '240464') {
      return { className: '24DTTA1', major: 'Trí tuệ nhân tạo' };
    }
    return { className: '24DTHA1', major: 'Công nghệ thông tin' };
  };

  useFocusEffect(
    useCallback(() => {
      if (!globalUser.isLoggedIn) {
        router.replace('/login');
        return;
      }
      setUserData({ name: globalUser.name, mssv: globalUser.mssv });
      setStudentInfo(getStudentDetails(globalUser.mssv));
    }, [])
  );

  const handleLogout = () => {
    globalUser.isLoggedIn = false;
    globalUser.mssv = '';
    globalUser.name = '';
    router.replace('/login');
  };

  if (!globalUser.isLoggedIn || userData.mssv === '') {
    return <View className="flex-1 bg-[#f9f9f9]" />;
  }

  return (
    <View className="flex-1 bg-[#f9f9f9]">
      <View className="absolute top-0 w-full z-50 bg-white/90 px-6 pt-12 pb-4 flex-row justify-between items-center shadow-sm border-b border-slate-100">
        <View className="flex-row items-center gap-3">
          <Image source={{ uri: 'https://tse4.mm.bing.net/th/id/OIP.sYub1wIWIHQfK6LeKRUvkQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3' }} className="w-8 h-8 rounded-full" resizeMode="cover"/>
          <Text className="text-lg font-extrabold tracking-tighter text-[#000666]">TBD UNIVERSITY</Text>
        </View>
        <TouchableOpacity className="p-2 active:scale-95">
          <MaterialIcons name="notifications-none" size={26} color="#64748b" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 pt-24 px-6 pb-32" showsVerticalScrollIndicator={false}>
        <View className="bg-white rounded-3xl p-6 shadow-sm overflow-hidden mb-6 relative mt-4 border border-slate-100">
          <View className="absolute top-0 right-0 w-32 h-32 bg-[#e0e0ff] opacity-20 rounded-bl-full -mr-12 -mt-12" />
          
          <View className="items-center relative z-10">
            <View className="relative mb-4">
              <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' }} className="w-24 h-24 rounded-full border-4 border-[#f3f3f3]" />
              <View className="absolute bottom-0 right-0 bg-[#000666] p-1.5 rounded-full border-2 border-white shadow-sm">
                <MaterialIcons name="edit" size={14} color="white" />
              </View>
            </View>
            
            <Text className="text-2xl font-extrabold text-[#000666] tracking-tight mb-1 text-center">
              {userData.name}
            </Text>
            <Text className="text-[#454652] font-medium text-sm mb-4">
              MSSV: {userData.mssv}
            </Text>
            
            <View className="flex-row flex-wrap justify-center gap-2">
              <View className="px-3 py-1 bg-[#e0e0ff] rounded-full">
                <Text className="text-[#343d96] text-[10px] font-bold uppercase tracking-wider">Khoa CNTT & Bán dẫn</Text>
              </View>
              <View className="px-3 py-1 bg-[#f3f3f3] rounded-full">
                <Text className="text-[#454652] text-[10px] font-bold uppercase tracking-wider">Năm 2</Text>
              </View>
            </View>
          </View>
        </View>

        <View className="flex-row gap-4 mb-8">
          <View className="flex-1 bg-[#f3f3f3] p-5 rounded-2xl border border-slate-200">
            <Text className="text-[10px] font-bold text-[#767683] uppercase tracking-widest mb-2">Chuyên ngành</Text>
            <Text className="text-[#1a1c1c] font-bold text-base">{studentInfo.major}</Text>
          </View>
          <View className="flex-1 bg-[#f3f3f3] p-5 rounded-2xl border border-slate-200">
            <Text className="text-[10px] font-bold text-[#767683] uppercase tracking-widest mb-2">Lớp sinh hoạt</Text>
            <Text className="text-[#1a1c1c] font-bold text-base">{studentInfo.className}</Text>
          </View>
        </View>

        {/* DANH SÁCH THÔNG TIN CÁ NHÂN */}
        <View className="mb-10 space-y-3">
          <Text className="text-xs font-bold text-[#454652] uppercase tracking-widest px-2 mb-1">Thông tin cá nhân</Text>
          
          {/* THÔNG TIN CHI TIẾT */}
          <TouchableOpacity onPress={() => router.push('/personal-info')} className="flex-row items-center justify-between p-4 bg-white rounded-2xl shadow-sm border border-slate-100 active:bg-slate-50">
            <View className="flex-row items-center gap-4">
              <View className="w-12 h-12 rounded-xl bg-[#f3f3f3] items-center justify-center">
                <MaterialIcons name="person-outline" size={24} color="#000666" />
              </View>
              <View>
                <Text className="font-bold text-[#1a1c1c] text-base">Thông tin chi tiết</Text>
                <Text className="text-xs text-[#767683] mt-0.5">Địa chỉ, CMND, Ngày sinh</Text>
              </View>
            </View>
            <MaterialIcons name="chevron-right" size={24} color="#767683" />
          </TouchableOpacity>

          {/* MỤC MỚI: KHEN THƯỞNG */}
          <TouchableOpacity onPress={() => router.push('/awards')} className="flex-row items-center justify-between p-4 bg-white rounded-2xl shadow-sm border border-slate-100 active:bg-slate-50">
            <View className="flex-row items-center gap-4">
              <View className="w-12 h-12 rounded-xl bg-[#fff4e5] items-center justify-center">
                <MaterialIcons name="military-tech" size={24} color="#f59e0b" />
              </View>
              <View>
                <Text className="font-bold text-[#1a1c1c] text-base">Khen thưởng</Text>
                <Text className="text-xs text-[#767683] mt-0.5">Thành tích và các danh hiệu</Text>
              </View>
            </View>
            <MaterialIcons name="chevron-right" size={24} color="#767683" />
          </TouchableOpacity>
        </View>

        <View className="px-2 pb-24">
          <TouchableOpacity onPress={handleLogout} className="w-full py-4 bg-[#f3f3f3] rounded-full flex-row items-center justify-center gap-2 active:bg-[#ffdad6] border border-transparent">
            <MaterialIcons name="logout" size={20} color="#ba1a1a" />
            <Text className="text-[#ba1a1a] font-bold text-base">Đăng xuất</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>

      <View className="absolute bottom-0 w-full z-50 bg-white/95 rounded-t-3xl flex-row justify-around items-center px-4 pt-3 pb-8 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <TouchableOpacity onPress={() => router.push('/')} className="items-center justify-center px-4 py-2 active:scale-95">
          <MaterialIcons name="home" size={24} color="#64748b" />
          <Text className="text-[11px] font-semibold text-slate-500 uppercase mt-1 tracking-wide">Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/calendar')} className="items-center justify-center px-4 py-2 active:scale-95">
          <MaterialIcons name="calendar-month" size={24} color="#64748b" />
          <Text className="text-[11px] font-semibold text-slate-500 uppercase mt-1 tracking-wide">Calendar</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center justify-center px-4 py-2 active:scale-95">
          <MaterialIcons name="school" size={24} color="#64748b" />
          <Text className="text-[11px] font-semibold text-slate-500 uppercase mt-1 tracking-wide">Academics</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center justify-center bg-[#1a237e] rounded-2xl px-5 py-2 active:scale-95">
          <MaterialIcons name="person" size={24} color="white" />
          <Text className="text-[11px] font-semibold text-white uppercase mt-1 tracking-wide">Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}