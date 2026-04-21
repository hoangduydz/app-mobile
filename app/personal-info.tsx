import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { globalUser } from './mockDB';

export default function PersonalInfoScreen() {
  const router = useRouter();

  // 2. State quản lý dữ liệu và trạng thái Loading
  const [currentStudent, setCurrentStudent] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  // 3. Hàm gọi API lấy chi tiết sinh viên khi màn hình vừa được load
  useEffect(() => {
    const fetchStudentDetails = async () => {
      setIsLoading(true);
      setError('');
      
      try {
        // ⚠️ NGÀY MAI THAY URL NÀY BẰNG API CỦA BACKEND
        const apiUrl = `http://YOUR_LOCAL_IP:5000/api/student/details/${globalUser.mssv}`; 

        // === ĐOẠN NÀY SẼ DÙNG KHI CÓ API THẬT ===
        /*
        const response = await axios.get(apiUrl);
        if(response.data) {
          setCurrentStudent(response.data);
        } else {
          setError('Không tìm thấy thông tin sinh viên.');
        }
        */

        // === CODE TẠM THỜI (MOCK GIẢ LẬP GỌI API TRONG 1 GIÂY) ===
        setTimeout(() => {
          // Giả lập dữ liệu trả về từ Server dựa trên MSSV
          let fetchedData = {
            fullName: globalUser.name || "Chưa cập nhật",
            studentId: globalUser.mssv,
            dob: "14/01/2006",
            gender: "Nam",
            cccd: "000012345678",
            cccdDate: "20/10/2021",
            cccdPlace: "Cục CS QLHC về TTXH",
            phone: "090xxxxxxx",
            email: `${globalUser.mssv}@tbd.edu.vn`,
            address: "Nha Trang, Khánh Hòa"
          };

          // Hardcode vài trường hợp đặc biệt để test
          if (globalUser.mssv === '240464') {
            fetchedData.fullName = "Lương Công Hoàng Duy";
            fetchedData.address = "Xã Suối Dầu, Khánh Hòa";
          } else if (globalUser.mssv === '240289') {
             fetchedData.fullName = "Giáp Quốc Vin";
          } else if (globalUser.mssv === '240142') {
             fetchedData.fullName = "Bùi Trần Thanh Quang";
             fetchedData.address = "Ninh Hòa, Khánh Hòa";
          }

          setCurrentStudent(fetchedData);
          setIsLoading(false);
        }, 1000); // 1000ms = 1s loading

      } catch (err) {
        console.error("Lỗi khi gọi API Personal Info:", err);
        setError('Không thể kết nối đến Máy chủ để lấy thông tin.');
        setIsLoading(false);
      }
    };

    fetchStudentDetails();
  }, []);

  // 4. HIỂN THỊ MÀN HÌNH LOADING
  if (isLoading) {
    return (
      <View className="flex-1 bg-[#f3f3f3] items-center justify-center">
        <ActivityIndicator size="large" color="#000666" />
        <Text className="mt-4 text-[#454652] font-medium text-sm">Đang tải thông tin chi tiết...</Text>
      </View>
    );
  }

  // 5. HIỂN THỊ MÀN HÌNH LỖI (Nếu API chết)
  if (error) {
    return (
       <View className="flex-1 bg-[#f3f3f3]">
         <View className="bg-white px-4 pt-12 pb-4 flex-row items-center shadow-sm z-50 border-b border-slate-100">
          <TouchableOpacity onPress={() => router.back()} className="p-2 mr-2 active:scale-95">
            <MaterialIcons name="arrow-back-ios" size={22} color="#000666" />
          </TouchableOpacity>
          <Text className="text-lg font-bold text-[#000666]">Lỗi dữ liệu</Text>
        </View>
        <View className="flex-1 items-center justify-center p-6">
           <MaterialIcons name="error-outline" size={60} color="#ba1a1a" />
           <Text className="text-[#ba1a1a] text-center mt-4 text-base font-medium">{error}</Text>
           <TouchableOpacity onPress={() => router.back()} className="mt-6 px-6 py-3 bg-[#000666] rounded-full">
             <Text className="text-white font-bold">Quay lại</Text>
           </TouchableOpacity>
        </View>
       </View>
    );
  }

  // 6. HIỂN THỊ DỮ LIỆU CHÍNH THỨC
  return (
    <View className="flex-1 bg-[#f3f3f3]">
      <View className="bg-white px-4 pt-12 pb-4 flex-row items-center shadow-sm z-50 border-b border-slate-100">
        <TouchableOpacity onPress={() => router.back()} className="p-2 mr-2 active:scale-95">
          <MaterialIcons name="arrow-back-ios" size={22} color="#000666" />
        </TouchableOpacity>
        <Text className="text-lg font-bold text-[#000666]">
          Thông tin chi tiết
        </Text>
      </View>

      <ScrollView className="flex-1 px-4 pt-6 pb-12" showsVerticalScrollIndicator={false}>
        
        {/* Thẻ: Thông tin cơ bản */}
        <View className="bg-white rounded-2xl p-5 mb-4 shadow-sm border border-slate-100">
          <Text className="text-[11px] font-bold text-[#64748b] uppercase tracking-widest mb-4">Thông tin cơ bản</Text>
          <View className="mb-4">
            <Text className="text-xs text-[#64748b] mb-1">Họ và tên</Text>
            <Text className="text-base font-bold text-[#1a1c1c]">{currentStudent?.fullName}</Text>
          </View>
          <View className="flex-row justify-between mb-4">
            <View className="flex-1">
              <Text className="text-xs text-[#64748b] mb-1">Mã sinh viên</Text>
              <Text className="text-base font-bold text-[#1a1c1c]">{currentStudent?.studentId}</Text>
            </View>
            <View className="flex-1">
              <Text className="text-xs text-[#64748b] mb-1">Ngày sinh</Text>
              <Text className="text-base font-bold text-[#1a1c1c]">{currentStudent?.dob}</Text>
            </View>
          </View>
          <View>
            <Text className="text-xs text-[#64748b] mb-1">Giới tính</Text>
            <Text className="text-base font-bold text-[#1a1c1c]">{currentStudent?.gender}</Text>
          </View>
        </View>

        {/* Thẻ: Thông tin định danh (CCCD) */}
        <View className="bg-white rounded-2xl p-5 mb-4 shadow-sm border border-slate-100">
          <Text className="text-[11px] font-bold text-[#64748b] uppercase tracking-widest mb-4">Thông tin định danh</Text>
          <View className="mb-4">
            <Text className="text-xs text-[#64748b] mb-1">Số CMND / CCCD</Text>
            <Text className="text-base font-bold text-[#1a1c1c]">{currentStudent?.cccd}</Text>
          </View>
          <View className="mb-4">
            <Text className="text-xs text-[#64748b] mb-1">Ngày cấp</Text>
            <Text className="text-base font-bold text-[#1a1c1c]">{currentStudent?.cccdDate}</Text>
          </View>
          <View>
            <Text className="text-xs text-[#64748b] mb-1">Nơi cấp</Text>
            <Text className="text-base font-bold text-[#1a1c1c]">{currentStudent?.cccdPlace}</Text>
          </View>
        </View>

        {/* Thẻ: Thông tin liên hệ */}
        <View className="bg-white rounded-2xl p-5 mb-8 shadow-sm border border-slate-100">
          <Text className="text-[11px] font-bold text-[#64748b] uppercase tracking-widest mb-4">Thông tin liên lạc</Text>
          <View className="mb-4">
            <Text className="text-xs text-[#64748b] mb-1">Số điện thoại</Text>
            <Text className="text-base font-bold text-[#000666]">{currentStudent?.phone}</Text>
          </View>
          <View className="mb-4">
            <Text className="text-xs text-[#64748b] mb-1">Email trường cấp</Text>
            <Text className="text-base font-bold text-[#000666]">{currentStudent?.email}</Text>
          </View>
          <View>
            <Text className="text-xs text-[#64748b] mb-1">Địa chỉ liên hệ</Text>
            <Text className="text-base font-bold text-[#1a1c1c] leading-6">{currentStudent?.address}</Text>
          </View>
        </View>

      </ScrollView>
    </View>
  );
}