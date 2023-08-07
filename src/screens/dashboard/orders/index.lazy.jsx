import { Avatar, TableEntryDeleteButton, TableEntryText } from "components";

export default function orders() {
  return (
    <div className="container__main__content__listing">
      <div className="container__main__content__listing__header">
        <div className="container__main__content__listing__header__left"></div>
      </div>
      <div className="container__main__content__listing__table">
        <div className="container__main__content__listing__table__header">
          <div className="container__main__content__listing__table__header__entry">
            Actions
          </div>

          <div className="container__main__content__listing__table__header__entry">
            Order ID
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Order Date
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Customer name
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Phone No.
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Email
          </div>

          <div className="container__main__content__listing__table__header__entry">
            Payment
          </div>
        </div>
        <div className="container__main__content__listing__table__content">
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
        </div>
      </div>
    </div>
  );
}

function TableEntry() {
  return (
    <div className="container__main__content__listing__table__content__list">
      <div className="container__main__content__listing__table__content__list__entry">
        <TableEntryDeleteButton />
      </div>

      <TableEntryText>123456789</TableEntryText>
      <TableEntryText>11/12/22</TableEntryText>
      <TableEntryText>qasim</TableEntryText>
      <TableEntryText>+123234560</TableEntryText>
      <TableEntryText>samee@gmail.com</TableEntryText>
      <TableEntryText>Payment Pending</TableEntryText>
    </div>
  );
}
