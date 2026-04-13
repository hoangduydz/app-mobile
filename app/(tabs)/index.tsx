import { MaterialIcons } from '@expo/vector-icons';
import { useFocusEffect, useRouter } from 'expo-router';
import React, { useCallback, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { globalUser } from '../mockDB';

export default function HomeScreen() {
  const router = useRouter();
  
  // BỘ NHỚ TRẠNG THÁI CHO TRANG HOME
  const [userName, setUserName] = useState('');

  // LÍNH GÁC: Chạy ngay lập tức mỗi khi bạn bấm vào tab Home
  useFocusEffect(
    useCallback(() => {
      // Nếu chưa đăng nhập thì đá văng ra Login
      if (!globalUser.isLoggedIn) {
        router.replace('/login');
        return;
      }
      // Nạp tên người dùng mới nhất vào để vẽ lại màn hình
      setUserName(globalUser.name);
    }, [])
  );

  // Tránh lỗi chớp màn hình trắng khi chưa load xong tên
  if (!globalUser.isLoggedIn || userName === '') {
    return <View className="flex-1 bg-[#f9f9f9]" />;
  }

  return (
    <View className="flex-1 bg-[#f9f9f9]">
      {/* THANH TIÊU ĐỀ */}
      <View className="absolute top-0 w-full z-50 bg-white/90 px-6 pt-12 pb-4 flex-row justify-between items-center shadow-sm border-b border-slate-100">
        <View className="flex-row items-center gap-3">
          <Image source={{ uri: 'https://tse4.mm.bing.net/th/id/OIP.sYub1wIWIHQfK6LeKRUvkQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3' }} className="w-10 h-10 rounded-full" resizeMode="cover" />
          <Text className="text-lg font-extrabold tracking-tighter text-[#000666]">TBD UNIVERSITY</Text>
        </View>
        <TouchableOpacity className="p-2 active:scale-95 relative">
          <MaterialIcons name="notifications-none" size={28} color="#000666" />
          <View className="absolute top-2 right-2 w-3 h-3 bg-[#ba1a1a] rounded-full border-2 border-white" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 pt-28 px-6 pb-32" showsVerticalScrollIndicator={false}>
        
        {/* LỜI CHÀO (Đã tích hợp biến userName để tự nhảy tên) */}
        <View className="mb-8">
          <Text className="text-[#000666] font-bold text-xs tracking-widest uppercase mb-1">
            Xin chào, {userName}
          </Text>
          <Text className="text-3xl font-extrabold text-[#1a1c1c] leading-tight">
            Hành trình học tập{"\n"}<Text className="text-[#1a237e]">của bạn hôm nay.</Text>
          </Text>
        </View>

        {/* THỐNG KÊ ĐIỂM DANH */}
        <View className="mb-8">
          <View className="flex-row justify-between items-end mb-4">
            <Text className="text-xl font-bold text-[#1a1c1c]">Theo dõi điểm danh</Text>
            <Text className="text-sm font-semibold text-[#000666]">Học kỳ 2</Text>
          </View>
          <View className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 mb-4 flex-row items-center justify-between">
            <View>
              <Text className="text-sm text-[#454652] font-medium mb-1">Tỷ lệ chuyên cần</Text>
              <Text className="text-4xl font-extrabold text-[#000666]">94%</Text>
              <Text className="text-xs text-[#5d5f5f] mt-1">Tốt hơn 15% sv cùng khóa</Text>
            </View>
            <View className="w-20 h-20 rounded-full border-8 border-[#e0e0ff] items-center justify-center">
               <MaterialIcons name="check-circle" size={32} color="#000666" />
            </View>
          </View>

          <View className="flex-row gap-4">
            <View className="flex-1 bg-[#1a237e] p-4 rounded-xl">
              <MaterialIcons name="event-available" size={20} color="rgba(255,255,255,0.7)" />
              <View className="mt-4"><Text className="text-2xl font-bold text-white">42</Text><Text className="text-[10px] uppercase font-bold text-white/80 tracking-wider mt-1">Buổi học</Text></View>
            </View>
            <View className="flex-1 bg-[#e2e2e2] p-4 rounded-xl border border-slate-200">
              <MaterialIcons name="event-busy" size={20} color="#ba1a1a" />
              <View className="mt-4"><Text className="text-2xl font-bold text-[#1a1c1c]">02</Text><Text className="text-[10px] uppercase font-bold text-[#454652] tracking-wider mt-1">Vắng mặt</Text></View>
            </View>
          </View>
        </View>

        {/* THÔNG BÁO MỚI (Đã thêm vào thay thế cho Cảnh báo/Khen thưởng) */}
        <View className="mb-8 space-y-3">
          <View className="flex-row justify-between items-center mb-2">
            <Text className="text-xl font-bold text-[#1a1c1c]">Thông báo mới</Text>
            <TouchableOpacity>
              <Text className="text-sm font-bold text-[#000666]">Xem tất cả</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex-row gap-4 items-start active:scale-[0.98] mb-3">
            <View className="bg-[#e0e0ff] w-12 h-12 rounded-xl flex items-center justify-center">
              <MaterialIcons name="campaign" size={24} color="#000666" />
            </View>
            <View className="flex-1">
              <View className="flex-row justify-between mb-1">
                <Text className="text-xs font-bold text-[#000666] tracking-wide uppercase">Phòng Đào Tạo</Text>
                <Text className="text-[10px] text-[#767683]">2 giờ trước</Text>
              </View>
              <Text className="font-bold text-[#1a1c1c] mb-1">Lịch thi chính thức Học kỳ 2 đã được cập nhật</Text>
              <Text className="text-sm text-[#454652]" numberOfLines={2}>Vui lòng đăng nhập hệ thống để kiểm tra thời gian và địa điểm thi cụ thể.</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex-row gap-4 items-start active:scale-[0.98]">
            <View className="bg-[#ffdad6] w-12 h-12 rounded-xl flex items-center justify-center">
              <MaterialIcons name="payments" size={24} color="#ba1a1a" />
            </View>
            <View className="flex-1">
              <View className="flex-row justify-between mb-1">
                <Text className="text-xs font-bold text-[#ba1a1a] tracking-wide uppercase">Kế Toán</Text>
                <Text className="text-[10px] text-[#767683]">Hôm qua</Text>
              </View>
              <Text className="font-bold text-[#1a1c1c] mb-1">Nhắc nhở hoàn tất học phí đợt cuối</Text>
              <Text className="text-sm text-[#454652]" numberOfLines={2}>Hạn cuối nộp học phí là ngày 15/10/2023. Các trường hợp trễ hạn sẽ bị hủy đăng ký tín chỉ.</Text>
            </View>
          </TouchableOpacity>
        </View>

      </ScrollView>

      {/* NÚT QUÉT MÃ QR NỔI (Floating Action Button) */}
      <TouchableOpacity className="absolute right-6 bottom-28 w-14 h-14 bg-[#000666] rounded-full shadow-lg flex items-center justify-center active:scale-90 z-40">
        <MaterialIcons name="qr-code-scanner" size={26} color="white" />
      </TouchableOpacity>

      {/* THANH MENU DƯỚI CÙNG (Tab Home đang Active) */}
      <View className="absolute bottom-0 w-full z-50 bg-white/95 rounded-t-3xl flex-row justify-around items-center px-4 pt-3 pb-8 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <TouchableOpacity className="items-center justify-center bg-[#1a237e] rounded-2xl px-5 py-2 active:scale-95">
          <MaterialIcons name="home" size={24} color="white" />
          <Text className="text-[11px] font-semibold text-white uppercase mt-1 tracking-wide">Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/calendar')} className="items-center justify-center px-5 py-2 active:scale-95">
          <MaterialIcons name="calendar-month" size={24} color="#64748b" />
          <Text className="text-[11px] font-semibold text-slate-500 uppercase mt-1 tracking-wide">Calendar</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center justify-center px-5 py-2 active:scale-95">
          <MaterialIcons name="school" size={24} color="#64748b" />
          <Text className="text-[11px] font-semibold text-slate-500 uppercase mt-1 tracking-wide">Academics</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/profile')} className="items-center justify-center px-5 py-2 active:scale-95">
          <MaterialIcons name="person" size={24} color="#64748b" />
          <Text className="text-[11px] font-semibold text-slate-500 uppercase mt-1 tracking-wide">Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}