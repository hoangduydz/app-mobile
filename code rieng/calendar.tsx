import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function CalendarScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#f9f9f9]">
      
      {/* 1. THANH TIÊU ĐỀ TRÊN CÙNG */}
      <View className="absolute top-0 w-full z-50 bg-white/90 px-6 pt-12 pb-4 flex-row justify-between items-center shadow-sm border-b border-slate-100">
        <View className="flex-row items-center gap-3">
          <View className="w-8 h-8 rounded-full bg-[#e0e0ff] items-center justify-center">
             <Text className="text-[#000666] font-bold text-xs">TBD</Text>
          </View>
          <Text className="text-lg font-extrabold tracking-tighter text-[#000666]">
            TBD UNIVERSITY
          </Text>
        </View>
        <TouchableOpacity className="p-2 active:scale-95">
          <MaterialIcons name="notifications-none" size={26} color="#64748b" />
        </TouchableOpacity>
      </View>

      {/* 2. NỘI DUNG CHÍNH (CÓ THỂ CUỘN) */}
      <ScrollView className="flex-1 pt-28 px-4 pb-32" showsVerticalScrollIndicator={false}>
        
        {/* Tiêu đề trang */}
        <View className="mb-6 px-2">
          <Text className="text-3xl font-bold text-[#000666] tracking-tight mb-1">Lịch của bạn</Text>
          <Text className="text-[#454652] text-sm">Theo dõi kế hoạch học tập và thi cử.</Text>
        </View>

        {/* Khối Thống kê */}
        <View className="flex-row gap-4 mb-8">
          <View className="flex-1 bg-[#000666] p-5 rounded-xl shadow-md overflow-hidden relative">
            <View className="relative z-10">
              <Text className="font-bold text-lg text-white mb-1">Lịch học</Text>
              <Text className="text-[#e0e0ff] text-xs opacity-80">14 tiết học tuần này</Text>
            </View>
            <MaterialIcons name="school" size={70} color="rgba(255,255,255,0.05)" style={{ position: 'absolute', bottom: -10, right: -10 }} />
          </View>

          <View className="flex-1 bg-[#e8e8e8] p-5 rounded-xl shadow-sm overflow-hidden relative">
            <View className="relative z-10">
              <Text className="font-bold text-lg text-[#1a1c1c] mb-1">Lịch thi</Text>
              <Text className="text-[#454652] text-xs">2 bài sắp tới</Text>
            </View>
            <MaterialIcons name="assignment-turned-in" size={70} color="rgba(0,6,102,0.05)" style={{ position: 'absolute', bottom: -10, right: -10 }} />
          </View>
        </View>

        {/* Lịch trình chi tiết trong ngày */}
        <View className="px-2">
          <View className="flex-row items-center justify-between mb-5">
            <Text className="text-xl font-bold text-[#000666]">Thứ 2, 06 Tháng 4</Text>
            <View className="bg-[#f3f3f3] px-3 py-1 rounded-full">
              <Text className="text-[10px] font-semibold text-[#454652] uppercase">Hôm nay</Text>
            </View>
          </View>

          {/* Lịch học 1 */}
          <View className="bg-white p-4 rounded-xl flex-row items-center gap-4 shadow-sm border-l-4 border-[#000666] mb-4">
            <View className="items-center min-w-[50px]">
              <Text className="text-sm font-bold text-[#000666]">08:00</Text>
              <Text className="text-[10px] text-[#767683]">09:30</Text>
            </View>
            <View className="flex-1">
              <View className="flex-row items-center gap-2 mb-1">
                <View className="bg-[#e0e0ff] px-2 py-0.5 rounded">
                  <Text className="text-[10px] font-bold text-[#1a237e] uppercase">Lịch học</Text>
                </View>
                <Text className="text-[10px] text-[#767683]">Nhóm 02</Text>
              </View>
              <Text className="font-bold text-[#1a1c1c] text-base mb-1">Cơ sở dữ liệu nâng cao</Text>
              <View className="flex-row items-center gap-1">
                <MaterialIcons name="location-on" size={14} color="#767683" />
                <Text className="text-xs text-[#454652]">Phòng A.402</Text>
              </View>
            </View>
          </View>

          {/* Lịch thi */}
          <View className="bg-white p-4 rounded-xl flex-row items-center gap-4 shadow-sm border-l-4 border-[#ba1a1a] mb-4">
            <View className="items-center min-w-[50px]">
              <Text className="text-sm font-bold text-[#ba1a1a]">13:30</Text>
              <Text className="text-[10px] text-[#767683]">15:00</Text>
            </View>
            <View className="flex-1">
              <View className="flex-row items-center gap-2 mb-1">
                <View className="bg-[#ffdad6] px-2 py-0.5 rounded">
                  <Text className="text-[10px] font-bold text-[#ba1a1a] uppercase">Lịch thi</Text>
                </View>
                <Text className="text-[10px] text-[#767683]">Giữa kỳ</Text>
              </View>
              <Text className="font-bold text-[#1a1c1c] text-base mb-1">Phát triển ứng dụng Web</Text>
              <View className="flex-row items-center gap-1">
                <MaterialIcons name="location-on" size={14} color="#767683" />
                <Text className="text-xs text-[#454652]">Lab 01 (Cơ sở 2)</Text>
              </View>
            </View>
          </View>

          {/* Lịch học 2 (Đã học xong - làm mờ đi) */}
          <View className="bg-white p-4 rounded-xl flex-row items-center gap-4 shadow-sm border-l-4 border-[#000666] opacity-60">
            <View className="items-center min-w-[50px]">
              <Text className="text-sm font-bold text-[#000666]">15:15</Text>
              <Text className="text-[10px] text-[#767683]">16:45</Text>
            </View>
            <View className="flex-1">
              <View className="flex-row items-center gap-2 mb-1">
                <View className="bg-[#e0e0ff] px-2 py-0.5 rounded">
                  <Text className="text-[10px] font-bold text-[#1a237e] uppercase">Lịch học</Text>
                </View>
                <Text className="text-[10px] text-[#767683]">Nhóm 01</Text>
              </View>
              <Text className="font-bold text-[#1a1c1c] text-base mb-1">Trí tuệ nhân tạo</Text>
              <View className="flex-row items-center gap-1">
                <MaterialIcons name="location-on" size={14} color="#767683" />
                <Text className="text-xs text-[#454652]">Phòng B.205</Text>
              </View>
            </View>
          </View>

        </View>
      </ScrollView>

      {/* 3. THANH ĐIỀU HƯỚNG BÊN DƯỚI (Calendar đang Active) */}
      <View className="absolute bottom-0 w-full z-50 bg-white/95 rounded-t-3xl flex-row justify-around items-center px-4 pt-3 pb-8 shadow-2xl">
        
        <TouchableOpacity onPress={() => router.push('/')} className="items-center justify-center px-4 py-2 active:scale-95">
          <MaterialIcons name="home" size={24} color="#64748b" />
          <Text className="text-[11px] font-medium text-slate-500 uppercase mt-1 tracking-wide">Home</Text>
        </TouchableOpacity>

        {/* Nút Calendar Đang Được Chọn */}
        <TouchableOpacity className="items-center justify-center bg-[#1a237e] rounded-xl px-5 py-2 active:scale-95">
          <MaterialIcons name="calendar-month" size={24} color="white" />
          <Text className="text-[11px] font-medium text-white uppercase mt-1 tracking-wide">Calendar</Text>
        </TouchableOpacity>

        <TouchableOpacity className="items-center justify-center px-4 py-2 active:scale-95">
          <MaterialIcons name="school" size={24} color="#64748b" />
          <Text className="text-[11px] font-medium text-slate-500 uppercase mt-1 tracking-wide">Academics</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/profile')} className="items-center justify-center px-4 py-2 active:scale-95">
          <MaterialIcons name="person" size={24} color="#64748b" />
          <Text className="text-[11px] font-medium text-slate-500 uppercase mt-1 tracking-wide">Profile</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}