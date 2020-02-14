/* Copyright (c) 2019 The Brave Authors. All rights reserved.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

#ifndef BRAVE_BROWSER_UI_WEBUI_SETTINGS_BRAVE_PRIVACY_HANDLER_H_
#define BRAVE_BROWSER_UI_WEBUI_SETTINGS_BRAVE_PRIVACY_HANDLER_H_

#include "chrome/browser/ui/webui/settings/settings_page_ui_handler.h"
#include "components/prefs/pref_change_registrar.h"

namespace content {
class WebUIDataSource;
}

class Profile;

class BravePrivacyHandler : public settings::SettingsPageUIHandler {
 public:
  BravePrivacyHandler();
  ~BravePrivacyHandler() override;
  static void AddLoadTimeData(content::WebUIDataSource* data_source,
                              Profile* profile);

 private:
  // SettingsPageUIHandler overrides:
  void RegisterMessages() override;
  void OnJavascriptAllowed() override {}
  void OnJavascriptDisallowed() override {}

  void SetWebRTCPolicy(const base::ListValue* args);
  void GetWebRTCPolicy(const base::ListValue* args);

  void SetP3AEnabled(const base::ListValue* args);
  void GetP3AEnabled(const base::ListValue* args);

  void SetRemoteDebuggingEnabled(const base::ListValue* args);
  void GetRemoteDebuggingEnabled(const base::ListValue* args);
  void OnRemoteDebuggingEnabledChanged();

  Profile* profile_ = nullptr;
  PrefChangeRegistrar local_state_change_registrar_;

  DISALLOW_COPY_AND_ASSIGN(BravePrivacyHandler);
};

#endif  // BRAVE_BROWSER_UI_WEBUI_SETTINGS_BRAVE_PRIVACY_HANDLER_H_