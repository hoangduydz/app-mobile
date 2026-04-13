import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { globalUser } from './mockDB';

export default function AwardsScreen() {
  const router = useRouter();

  // Dữ liệu khen thưởng giả lập cho từng người
  const awardsData: Record<string, any[]> = {
    '240464': [
      { title: "Sinh viên 5 tốt", level: "Cấp Trường", year: "2025 - 2026", color: "#000666" },
      
    ],
    'default': [
      { title: "Học bổng khuyến khích học tập", level: "Loại Giỏi", year: "Học kỳ 1 - 2025", color: "#343d96" }
    ]
  };

  const myAwards = awardsData[globalUser.mssv] || awardsData['default'];

  return (
    <View className="flex-1 bg-[#f3f3f3]">
      {/* Header */}
      <View className="bg-white px-4 pt-12 pb-4 flex-row items-center shadow-sm border-b border-slate-100">
        <TouchableOpacity onPress={() => router.back()} className="p-2 mr-2">
          <MaterialIcons name="arrow-back-ios" size={22} color="#000666" />
        </TouchableOpacity>
        <Text className="text-lg font-bold text-[#000666]">Khen thưởng & Thành tích</Text>
      </View>

      <ScrollView className="flex-1 px-4 pt-6" showsVerticalScrollIndicator={false}>
        {myAwards.map((item, index) => (
          <View key={index} className="bg-white rounded-3xl p-5 mb-4 shadow-sm border border-slate-100 flex-row items-center gap-4">
            <View style={{backgroundColor: item.color}} className="w-14 h-14 rounded-2xl items-center justify-center">
              <MaterialIcons name="military-tech" size={30} color="white" />
            </View>
            <View className="flex-1">
              <Text className="text-[10px] font-bold text-[#767683] uppercase tracking-widest mb-1">{item.level}</Text>
              <Text className="text-base font-bold text-[#1a1c1c] leading-tight mb-1">{item.title}</Text>
              <Text className="text-xs text-[#64748b]">{item.year}</Text>
            </View>
          </View>
        ))}

        {myAwards.length === 0 && (
          <View className="items-center mt-20">
            <MaterialIcons name="emoji-events" size={80} color="#e2e2e2" />
            <Text className="text-[#767683] font-medium mt-4">Chưa có dữ liệu khen thưởng</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}