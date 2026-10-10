import React from 'react';
import { useHotel } from '../../context/HotelContext';
import { Sparkles, Crown, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';

export const WizardBanner: React.FC = () => {
  const { currentUser, upgradeToWizard } = useHotel();

  const isMember = currentUser?.isWizardMember;

  return (
    <div className="my-10 bg-gradient-to-r from-gray-900 via-neutral-900 to-gray-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden border border-neutral-800">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div className="space-y-3 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="bg-amber-400 text-gray-950 font-black text-xs px-2.5 py-1 rounded-md tracking-wider uppercase flex items-center gap-1 shadow-md">
              <Crown className="w-3.5 h-3.5 fill-black" />
              <span>OYO Wizard Club</span>
            </span>
            {isMember && (
              <span className="bg-emerald-950 text-emerald-300 text-xs font-bold px-2.5 py-0.5 rounded-full border border-emerald-700">
                Active Member &bull; Gold Tier
              </span>
            )}
          </div>

          <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white">
            Unlock Instant 5% Additional Discount & VIP Hotel Privileges
          </h3>

          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            Join 10+ Million travelers on OYO Wizard. Enjoy guaranteed discounted room rates on every stay, complimentary hot buffet breakfast, and early check-in at Grand Regal Hotel.
          </p>

          {/* Perks list */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="flex items-center gap-2 text-xs text-amber-200">
              <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
              <span>5% Extra Direct Discount</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-amber-200">
              <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Free Early Check-in from 9 AM</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-amber-200">
              <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Free Welcome Drink & Water</span>
            </div>
          </div>
        </div>

        {/* Right Action */}
        <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-2">
          {isMember ? (
            <div className="bg-neutral-800/80 border border-amber-400/30 px-5 py-3 rounded-xl text-left lg:text-right">
              <div className="text-xs text-amber-300 font-semibold">Your Wizard Wallet</div>
              <div className="text-xl font-black text-white">
                ₹{currentUser.walletBalance} OYO Money
              </div>
              <div className="text-[10px] text-gray-400">Usable on all upcoming reservations</div>
            </div>
          ) : (
            <button
              onClick={upgradeToWizard}
              className="px-6 py-3.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-gray-950 font-black text-xs rounded-xl shadow-lg transition-all hover:scale-105 flex items-center gap-2 cursor-pointer"
            >
              <span>Join Wizard Gold (₹99 / year)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
