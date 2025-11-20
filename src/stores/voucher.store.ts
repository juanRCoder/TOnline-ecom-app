import { create } from "zustand";
import type { VoucherType } from "@/types/orders.type";


type VoucherState = {
  voucher: VoucherType | null;
  setVoucher: (voucher: VoucherType) => void;
  clearVoucher: () => void;
}

export const useVoucherStore = create<VoucherState>((set) => ({
  voucher: null,
  setVoucher: (voucher) => set({ voucher }),
  clearVoucher: () => set({ voucher: null })
}))