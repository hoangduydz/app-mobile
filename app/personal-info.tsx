import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { globalUser } from './mockDB'; // Import bộ não trung tâm

export default function PersonalInfoScreen() {
  const router = useRouter();

  // 1. BẢNG DỮ LIỆU CHI TIẾT CỦA CẢ NHÓM (Bạn có thể sửa lại thông tin thật ở đây)
  const fullTeamData: Record<string, any> = {
    '240464': {
      fullName: "Lương Công Hoàng Duy",
      studentId: "240464",
      dob: "14/01/2006",
      gender: "Nam",
      cccd: "123456789",
      cccdDate: "20/10/2021",
      cccdPlace: "Cục CS QLHC về TTXH",
      phone: "034xxxxxxx",
      email: "duy.240464@tbd.edu.vn",
      address: "Xã Suối Dầu, Khánh Hòa"
    },
    '240289': {
      fullName: "Giáp Quốc Vin",
      studentId: "240289",
      dob: "01/01/2006",
      gender: "Nam",
      cccd: "987654321",
      cccdDate: "15/05/2022",
      cccdPlace: "Công an tỉnh Khánh Hòa",
      phone: "090xxxxxxx",
      email: "vin.240289@tbd.edu.vn",
      address: "Nha Trang, Khánh Hòa"
    },
    '240142': {
      fullName: "Bùi Trần Thanh Quang",
      studentId: "240142",
      dob: "10/05/2006",
      gender: "Nam",
      cccd: "456789123",
      cccdDate: "12/12/2021",
      cccdPlace: "Cục CS QLHC về TTXH",
      phone: "088xxxxxxx",
      email: "quang.240142@tbd.edu.vn",
      address: "Ninh Hòa, Khánh Hòa"
    },
    // Bạn có thể thêm các bạn Thiện, Tri, Thái... tương tự vào đây
  };

  // 2. LẤY DỮ LIỆU NGƯỜI ĐANG ĐĂNG NHẬP
  // Nếu không tìm thấy trong bảng trên, sẽ dùng dữ liệu mặc định để không bị lỗi app
  const currentStudent = fullTeamData[globalUser.mssv] || {
    fullName: globalUser.name,
    studentId: globalUser.mssv,
    dob: "Chưa cập nhật",
    gender: "Chưa cập nhật",
    cccd: "Chưa cập nhật",
    cccdDate: "Chưa cập nhật",
    cccdPlace: "Chưa cập nhật",
    phone: "Chưa cập nhật",
    email: `${globalUser.mssv}@tbd.edu.vn`,
    address: "Chưa cập nhật"
  };

  return (
    <View className="flex-1 bg-[#f3f3f3]">
      
      {/* 1. THANH TIÊU ĐỀ */}
      <View className="bg-white px-4 pt-12 pb-4 flex-row items-center shadow-sm z-50 border-b border-slate-100">
        <TouchableOpacity 
          onPress={() => router.back()} 
          className="p-2 mr-2 active:scale-95"
        >
          <MaterialIcons name="arrow-back-ios" size={22} color="#000666" />
        </TouchableOpacity>
        <Text className="text-lg font-bold text-[#000666]">
          Thông tin chi tiết
        </Text>
      </View>

      {/* 2. NỘI DUNG THÔNG TIN */}
      <ScrollView className="flex-1 px-4 pt-6 pb-12" showsVerticalScrollIndicator={false}>
        
        {/* Thẻ: Thông tin cơ bản */}
        <View className="bg-white rounded-2xl p-5 mb-4 shadow-sm border border-slate-100">
          <Text className="text-[11px] font-bold text-[#64748b] uppercase tracking-widest mb-4">
            Thông tin cơ bản
          </Text>
          
          <View className="mb-4">
            <Text className="text-xs text-[#64748b] mb-1">Họ và tên</Text>
            <Text className="text-base font-bold text-[#1a1c1c]">{currentStudent.fullName}</Text>
          </View>

          <View className="flex-row justify-between mb-4">
            <View className="flex-1">
              <Text className="text-xs text-[#64748b] mb-1">Mã sinh viên</Text>
              <Text className="text-base font-bold text-[#1a1c1c]">{currentStudent.studentId}</Text>
            </View>
            <View className="flex-1">
              <Text className="text-xs text-[#64748b] mb-1">Ngày sinh</Text>
              <Text className="text-base font-bold text-[#1a1c1c]">{currentStudent.dob}</Text>
            </View>
          </View>

          <View>
            <Text className="text-xs text-[#64748b] mb-1">Giới tính</Text>
            <Text className="text-base font-bold text-[#1a1c1c]">{currentStudent.gender}</Text>
          </View>
        </View>

        {/* Thẻ: Thông tin định danh (CCCD) */}
        <View className="bg-white rounded-2xl p-5 mb-4 shadow-sm border border-slate-100">
          <Text className="text-[11px] font-bold text-[#64748b] uppercase tracking-widest mb-4">
            Thông tin định danh
          </Text>
          
          <View className="mb-4">
            <Text className="text-xs text-[#64748b] mb-1">Số CMND / CCCD</Text>
            <Text className="text-base font-bold text-[#1a1c1c]">{currentStudent.cccd}</Text>
          </View>

          <View className="mb-4">
            <Text className="text-xs text-[#64748b] mb-1">Ngày cấp</Text>
            <Text className="text-base font-bold text-[#1a1c1c]">{currentStudent.cccdDate}</Text>
          </View>

          <View>
            <Text className="text-xs text-[#64748b] mb-1">Nơi cấp</Text>
            <Text className="text-base font-bold text-[#1a1c1c]">{currentStudent.cccdPlace}</Text>
          </View>
        </View>

        {/* Thẻ: Thông tin liên hệ */}
        <View className="bg-white rounded-2xl p-5 mb-8 shadow-sm border border-slate-100">
          <Text className="text-[11px] font-bold text-[#64748b] uppercase tracking-widest mb-4">
            Thông tin liên lạc
          </Text>
          
          <View className="mb-4">
            <Text className="text-xs text-[#64748b] mb-1">Số điện thoại</Text>
            <Text className="text-base font-bold text-[#000666]">{currentStudent.phone}</Text>
          </View>

          <View className="mb-4">
            <Text className="text-xs text-[#64748b] mb-1">Email trường cấp</Text>
            <Text className="text-base font-bold text-[#000666]">{currentStudent.email}</Text>
          </View>

          <View>
            <Text className="text-xs text-[#64748b] mb-1">Địa chỉ liên hệ</Text>
            <Text className="text-base font-bold text-[#1a1c1c] leading-6">{currentStudent.address}</Text>
          </View>
        </View>

      </ScrollView>
    </View>
  );
}