/*
 * Wire
 * Copyright (C) 2017 Wire Swiss GmbH
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see http://www.gnu.org/licenses/.
 *
 */

// grunt test_init && grunt test_run:client/Client

'use strict';

describe('z.client.Client', () => {
  describe('dismantleUserClientId', () => {
    it('can get the user ID and client ID from a session ID', () => {
      const sessionId = '034060fe-8406-476e-b29d-f0a214c0345b@4b0a0fbf418d264c';
      const ids = z.client.Client.dismantleUserClientId(sessionId);
      expect(ids.clientId).toBe('4b0a0fbf418d264c');
      expect(ids.userId).toBe('034060fe-8406-476e-b29d-f0a214c0345b');
    });

    it('can handle an undefined input', () => {
      const ids = z.client.Client.dismantleUserClientId(undefined);
      expect(ids.clientId).toBe(undefined);
      expect(ids.userId).toBe(undefined);
    });
  });
});
