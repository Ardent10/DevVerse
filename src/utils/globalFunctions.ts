import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs().format();
dayjs.extend(relativeTime);

interface props {
  format: string | undefined;
  dateTime: string | Date | undefined;
}

export function DateTimeConvertor({ dateTime, format }: props) {
  return dayjs(dateTime).format(format);
}

export default DateTimeConvertor;
