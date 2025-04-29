"use client"

import { useState, useRef, useEffect } from "react"
import { X, Upload, Eye, EyeOff, Music } from "lucide-react"
import axiosInstance from "@/utils/axios"
import { useRouter } from "next/navigation"
import useAuth from "@/utils/useAuth"


export const getUserInfo = async () => {
  try {
    const res = await axiosInstance.get('/auth');
    return res.data.user; 
  } catch (error) {
    console.error("Failed to fetch user info:", error);
    return null;
  }
};


export default function ProfileModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("profile")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [profileImage, setProfileImage] = useState("/defaultPfp.jpg")
  const [user, setUser ] = useState("");
  const fileInputRef = useRef(null)
  const router = useRouter();
  const isAuthenticated = useAuth();

  const handleImageChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        setProfileImage(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }


  useEffect(() => {

    const getInfo = async () => {
    const res = await getUserInfo();
    setUser(res);
    setProfileImage(
        res.profilePicture || "/defaultPfp.jpg" // Set default image if none is provided
      ) 
    };

    getInfo();

  }, [])

  useEffect(() => {
    const getInfo = async () => {
      const res = await getUserInfo();
      setUser(res);
    };

    if (!isAuthenticated) {
      console.log("Not logged in");
    } else {
      getInfo();
    }

  }, [isAuthenticated]);

const handleSave = async () => {
  try {
    const updatedUser = {
      fullName: document.getElementById("name")?.value,
      username: document.getElementById("username")?.value,
      email: document.getElementById("email")?.value,
      profilePicture: profileImage || "/defaultPfp.jpg", // Make sure this input exists
    };

    const token = localStorage.getItem("token");

    const res = await axiosInstance.put('/auth', updatedUser, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("User updated:", res.data);
    onClose();
  } catch (error) {
    console.error("Failed to save user changes:", error);
  }
};
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-md max-h-[90vh] overflow-auto bg-[#121212] text-white rounded-lg shadow-lg animate-in slide-in-from-bottom-10 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <h2 className="text-xl font-semibold">User Profile</h2>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-800 transition-colors">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-800">
          <button
            className={`flex-1 py-3 font-medium text-sm ${activeTab === "profile" ? "text-purple-400 border-b-2 border-purple-400" : "text-gray-400"}`}
            onClick={() => setActiveTab("profile")}
          >
            Profile Information
          </button>
          <button
            className={`flex-1 py-3 font-medium text-sm ${activeTab === "password" ? "text-purple-400 border-b-2 border-purple-400" : "text-gray-400"}`}
            onClick={() => setActiveTab("password")}
          >
            Change Password
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          {activeTab === "profile" ? (
            <div className="space-y-6">
              {/* Profile Picture */}
              <div className="flex flex-col items-center">
                <div className="relative group">
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-24 h-24 rounded-full object-cover border-2 border-gray-700"
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-black/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <Upload className="h-6 w-6 text-white" />
                  </div>
                  <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </div>
                <button
                  className="mt-2 text-sm text-purple-400 hover:underline"
                  onClick={() => fileInputRef.current?.click()}
                >
                  Change Profile Picture
                </button>
              </div>

              {/* User Info */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <p htmlFor="name" className="text-gray-300">
                    Full Name
                  </p>
                  <input
                    id="name"
                    defaultValue={user.fullName}
                    className="bg-[#1e1e1e] border-gray-700 text-white focus:border-purple-400 focus:ring-purple-400"
                  />
                </div>
                <div className="space-y-2">
                  <p htmlFor="username" className="text-gray-300">
                    Username
                  </p>
                  <input
                    id="username"
                    defaultValue={user.username}
                    className="bg-[#1e1e1e] border-gray-700 text-white focus:border-purple-400 focus:ring-purple-400"
                  />
                </div>
                <div className="space-y-2">
                  <p htmlFor="email" className="text-gray-300">
                    Email
                  </p>
                  <input
                    id="email"
                    type="email"
                    defaultValue={user.email}
                    className="bg-[#1e1e1e] border-gray-700 text-white focus:border-purple-400 focus:ring-purple-400"
                  />
                </div>

                <div className="pt-2">
                  <p className="text-sm text-gray-500">Member since: {user.createdAt}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="space-y-2">
                <p htmlFor="current-password" className="text-gray-300">
                  Current Password
                </p>
                <div className="relative">
                  <input
                    id="current-password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your current password"
                    className="bg-[#1e1e1e] border-gray-700 text-white focus:border-purple-400 focus:ring-purple-400"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <p htmlFor="new-password" className="text-gray-300">
                  New Password
                </p>
                <input
                  id="new-password"
                  type="password"
                  placeholder="Enter your new password"
                  className="bg-[#1e1e1e] border-gray-700 text-white focus:border-purple-400 focus:ring-purple-400"
                />
              </div>
              <div className="space-y-2">
                <p htmlFor="confirm-password" className="text-gray-300">
                  Confirm New Password
                </p>
                <div className="relative">
                  <input
                    id="confirm-password"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your new password"
                    className="bg-[#1e1e1e] border-gray-700 text-white focus:border-purple-400 focus:ring-purple-400"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
              <p className="text-xs text-gray-500">
                Password must be at least 8 characters long and include a mix of letters, numbers, and special
                characters.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-800 flex justify-end space-x-2">
          <button
            variant="outline"
            className="px-10 py-2 rounded-xl border shadow-xl hover:text-white hover:border-white border-text text-text"
            onClick={onClose}
          >Cancel</button>
          <button onClick={handleSave} className="px-10 py-2 rounded-xl border shadow-xl hover:text-white hover:border-white border-text text-text">
            Save Changes
           </button>
        </div>
      </div>
    </div>
  )
}

