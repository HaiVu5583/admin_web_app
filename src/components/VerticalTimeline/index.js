const VerticalTimelineItem = (props) => {
  const { title, content } = props;
  return (
    <li class="mb-2">
      <div class="flex items-center mb-1">
        <div class="bg-blue-500 rounded-full h-4 w-4"></div>
        <div class="flex-1 ml-4 font-semibold">{title}</div>
      </div>
      <div class="ml-8 text-gray-500">{content}</div>
    </li>
  );
};
const VerticalTimeline = (props) => {
  const { data } = props;
  return (
    <div class="relative">
      <div
        class="border-r-2 border-blue-500 absolute h-full top-0"
        style={{ left: "7px" }}
      ></div>
      <ul class="list-none m-0 p-0">
        {!!data &&
          data.map((item) => {
            return (
              <VerticalTimelineItem
                title={item.title}
                content={item.content}
                key={item.title + item.content}
              />
            );
          })}
      </ul>
    </div>
  );
};

export default VerticalTimeline;
