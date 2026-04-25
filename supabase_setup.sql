-- ============================================================
-- full-stack (fs_) Supabase Setup
-- Site: full-stack.dreamitbiz.com
-- Prefix: fs_
-- Created: 2026-04-25
-- ============================================================

-- ============================================================
-- 1. 테이블 생성
-- ============================================================

-- 게시판 테이블
CREATE TABLE IF NOT EXISTS fs_board_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT 'free',
  author_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  author_name TEXT NOT NULL DEFAULT '',
  author_email TEXT NOT NULL DEFAULT '',
  views INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 댓글 테이블
CREATE TABLE IF NOT EXISTS fs_board_comments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  post_id UUID NOT NULL REFERENCES fs_board_posts(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  author_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  author_name TEXT NOT NULL DEFAULT '',
  author_email TEXT NOT NULL DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ============================================================
-- 2. 인덱스 생성
-- ============================================================

CREATE INDEX IF NOT EXISTS idx_fs_board_posts_category ON fs_board_posts(category);
CREATE INDEX IF NOT EXISTS idx_fs_board_posts_author_id ON fs_board_posts(author_id);
CREATE INDEX IF NOT EXISTS idx_fs_board_posts_created_at ON fs_board_posts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_fs_board_comments_post_id ON fs_board_comments(post_id);
CREATE INDEX IF NOT EXISTS idx_fs_board_comments_author_id ON fs_board_comments(author_id);

-- ============================================================
-- 3. RLS 활성화
-- ============================================================

ALTER TABLE fs_board_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE fs_board_comments ENABLE ROW LEVEL SECURITY;

-- ============================================================
-- 4. RLS 정책 — fs_board_posts
-- ============================================================

-- 누구나 읽기 가능
CREATE POLICY "fs_board_posts_select_all"
  ON fs_board_posts
  FOR SELECT
  USING (true);

-- 인증된 사용자만 작성 가능
CREATE POLICY "fs_board_posts_insert_auth"
  ON fs_board_posts
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = author_id);

-- 본인 글만 수정 가능
CREATE POLICY "fs_board_posts_update_own"
  ON fs_board_posts
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = author_id)
  WITH CHECK (auth.uid() = author_id);

-- 본인 글만 삭제 가능
CREATE POLICY "fs_board_posts_delete_own"
  ON fs_board_posts
  FOR DELETE
  TO authenticated
  USING (auth.uid() = author_id);

-- ============================================================
-- 5. RLS 정책 — fs_board_comments
-- ============================================================

-- 누구나 읽기 가능
CREATE POLICY "fs_board_comments_select_all"
  ON fs_board_comments
  FOR SELECT
  USING (true);

-- 인증된 사용자만 작성 가능
CREATE POLICY "fs_board_comments_insert_auth"
  ON fs_board_comments
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = author_id);

-- 본인 댓글만 수정 가능
CREATE POLICY "fs_board_comments_update_own"
  ON fs_board_comments
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = author_id)
  WITH CHECK (auth.uid() = author_id);

-- 본인 댓글만 삭제 가능
CREATE POLICY "fs_board_comments_delete_own"
  ON fs_board_comments
  FOR DELETE
  TO authenticated
  USING (auth.uid() = author_id);

-- ============================================================
-- 6. RPC 함수 — 조회수 증가
-- ============================================================

CREATE OR REPLACE FUNCTION increment_fs_post_views(post_id_input UUID)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  UPDATE fs_board_posts
  SET views = views + 1
  WHERE id = post_id_input;
END;
$$;

-- ============================================================
-- 7. updated_at 자동 업데이트 트리거
-- ============================================================

CREATE OR REPLACE FUNCTION update_fs_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER trigger_fs_board_posts_updated_at
  BEFORE UPDATE ON fs_board_posts
  FOR EACH ROW
  EXECUTE FUNCTION update_fs_updated_at();

-- ============================================================
-- 완료
-- ============================================================
