/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

export const enum types {
  CREATE_WALLET = '@@rewards_panel/CREATE_WALLET',
  ON_WALLET_INITIALIZED = '@@rewards_panel/ON_WALLET_INITIALIZED',
  ON_TAB_RETRIEVED = '@@rewards_panel/ON_TAB_RETRIEVED',
  ON_PUBLISHER_DATA = '@@rewards_panel/ON_PUBLISHER_DATA',
  ON_WALLET_PROPERTIES = '@@rewards_panel/ON_WALLET_PROPERTIES',
  GET_CURRENT_REPORT = '@@rewards_panel/GET_CURRENT_REPORT',
  ON_CURRENT_REPORT = '@@rewards_panel/ON_CURRENT_REPORT',
  ON_NOTIFICATION_ADDED = '@@rewards_panel/ON_NOTIFICATION_ADDED',
  ON_NOTIFICATION_DELETED = '@@rewards_panel/ON_NOTIFICATION_DELETED',
  DELETE_NOTIFICATION = '@@rewards_panel/DELETE_NOTIFICATION',
  INCLUDE_IN_AUTO_CONTRIBUTION = '@@rewards_panel/INCLUDE_IN_AUTO_CONTRIBUTION',
  FETCH_PROMOTIONS = '@@rewards_panel/FETCH_PROMOTIONS',
  ON_PROMOTIONS = '@@rewards_panel/ON_PROMOTIONS',
  ON_CLAIM_PROMOTION = '@@rewards_panel/ON_CLAIM_PROMOTION',
  RESET_PROMOTION = '@@rewards_panel/RESET_PROMOTION',
  DELETE_PROMOTION = '@@rewards_panel/DELETE_PROMOTION',
  ON_PROMOTION_FINISH = '@@rewards_panel/ON_PROMOTION_FINISH',
  ON_PENDING_CONTRIBUTIONS_TOTAL = '@@rewards_panel/ON_PENDING_CONTRIBUTIONS_TOTAL',
  ON_ENABLED_MAIN = '@@rewards_panel/ON_ENABLED_MAIN',
  ON_ENABLED_AC = '@@rewards_panel/ON_ENABLED_AC',
  ON_PUBLISHER_LIST_NORMALIZED = '@@rewards_panel/ON_PUBLISHER_LIST_NORMALIZED',
  ON_EXCLUDED_SITES_CHANGED = '@@rewards_panel/ON_EXCLUDED_SITES_CHANGED',
  ON_SETTING_SAVE = '@@rewards_panel/ON_SETTING_SAVE',
  SAVE_RECURRING_TIP = '@@rewards_panel/SAVE_RECURRING_TIP',
  REMOVE_RECURRING_TIP = '@@rewards_panel/REMOVE_RECURRING_TIP',
  ON_RECURRING_TIPS = '@@rewards_panel/ON_RECURRING_TIPS',
  ON_PUBLISHER_BANNER = '@@rewards_panel/ON_PUBLISHER_BANNER',
  ON_PUBLISHER_STATUS_REFRESHED = '@@rewards_panel/ON_PUBLISHER_STATUS_REFRESHED',
  ON_ALL_NOTIFICATIONS = '@@rewards_panel/ON_ALL_NOTIFICATIONS',
  ON_INIT = '@@rewards_panel/ON_INIT',
  ON_BALANCE = '@@rewards_panel/ON_BALANCE',
  ON_EXTERNAL_WALLET = '@@rewards_panel/ON_EXTERNAL_WALLET',
  ON_ANON_WALLET_STATUS = '@@rewards_panel/ON_ANON_WALLET_STATUS'
}

// Note: This declaration must match the RewardsNotificationType enum in
// brave/components/brave_rewards/browser/rewards_notification_service.h
export const enum RewardsNotificationType {
  REWARDS_NOTIFICATION_INVALID = 0,
  REWARDS_NOTIFICATION_AUTO_CONTRIBUTE,
  REWARDS_NOTIFICATION_GRANT,
  REWARDS_NOTIFICATION_GRANT_ADS,
  REWARDS_NOTIFICATION_FAILED_CONTRIBUTION,
  REWARDS_NOTIFICATION_IMPENDING_CONTRIBUTION,
  REWARDS_NOTIFICATION_INSUFFICIENT_FUNDS,
  REWARDS_NOTIFICATION_BACKUP_WALLET,
  REWARDS_NOTIFICATION_TIPS_PROCESSED,
  REWARDS_NOTIFICATION_ADS_ONBOARDING,
  REWARDS_NOTIFICATION_VERIFIED_PUBLISHER,
  REWARDS_NOTIFICATION_PENDING_NOT_ENOUGH_FUNDS,
  REWARDS_NOTIFICATION_GENERAL_LEDGER
}