import { IMembershipId } from '@features/PurchaseMembership/config';
import { accountWithMembership, membershipApiResponse } from '@fixtures';

import { formatResponse } from './MembershipApi';

describe('MembershipApi', () => {
  it('formatResponse(): transforms timestamps to MembershipStatus', () => {
    const expected = [
      {
        address: accountWithMembership,
        memberships: [
          { expiry: '1590743978', type: 'onemonth' as IMembershipId },
          { expiry: '1609372800', type: 'lifetime' as IMembershipId }
        ]
      }
    ];
    const actual = formatResponse(membershipApiResponse);
    expect(actual).toEqual(expected);
  });
});
