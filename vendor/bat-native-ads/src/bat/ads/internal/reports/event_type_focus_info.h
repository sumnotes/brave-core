/* Copyright (c) 2019 The Brave Authors. All rights reserved.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

#ifndef BAT_ADS_INTERNAL_REPORTS_EVENT_TYPE_FOCUS_INFO_H_
#define BAT_ADS_INTERNAL_REPORTS_EVENT_TYPE_FOCUS_INFO_H_

#include <stdint.h>

namespace ads {

struct FocusInfo {
  int32_t tab_id = -1;
};

}  // namespace ads

#endif  // BAT_ADS_INTERNAL_REPORTS_EVENT_TYPE_FOCUS_INFO_H_
