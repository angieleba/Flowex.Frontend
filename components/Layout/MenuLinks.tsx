import MenuLink from 'components/MenuLink/MenuLink';
import { useMemo } from 'react';
import { useAuthStore } from 'store/AuthStore';
import { Role } from 'types/enums';
import menuLinks from 'data/menuLinks.json';
import supplierLinks from 'data/supplierMenu.json';
import buyerLinks from 'data/buyerMenu.json';

export const MenuLinks = () => {
  const { role } = useAuthStore();

  const links = useMemo(() => {
    switch (role) {
      case Role.SUPPLIER:
        return supplierLinks;
      case Role.BUYER:
        return buyerLinks;
      default:
        return menuLinks;
    }
  }, [role]);

  return (
    <>
      {links.map((item) => (
        <MenuLink key={item.name} link={item.link} text={item.name} />
      ))}
    </>
  );
};
