<?php
if (!function_exists('userSetting')) {
    function userSetting($userId, $value, $default = null)
    {
        if (!$value || !$userId) return 0;
        if (is_array($value)) {
            foreach ($value as $key => $item) {
                $setting = \App\Models\Setting::where("user_id", $userId)->where("key", $key)->first();

                if (!$setting) {
                    \App\Models\Setting::create([
                        'user_id' => $userId,
                        'key' => $key,
                        'value' => $item
                    ]);
                } else {
                    $setting->update([
                        'value' => $item
                    ]);
                }
            }
            return 1;
        }

        $result = \App\Models\Setting::where('user_id', $userId)
            ->where('key', $value)
            ->first();

        return $result ? $result->value : $default;
    }
}