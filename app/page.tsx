import theme from "@/styles/theme";

export default function Home() {
  return (
    <>
      <div
        style={{
          color: theme.lightColors.primary1,
          fontStyle: theme.fontStyles.Title1,
        }}
      >
        폰트 세팅 테스트
      </div>
      <div style={{ color: theme.lightColors.primary2 }}>
        팔레트 기능 테스트
      </div>
      <div style={{ color: theme.lightColors.primary3 }}>
        팔레트 기능 테스트
      </div>
      <div style={{ color: theme.darkColors.status1 }}>팔레트 기능 테스트</div>
    </>
  );
}
